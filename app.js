const express = require("express");
const app = express();
const mongoose = require ("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-Override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./util/wrapAysnc.js");
const ExpressError = require("./util/ExpressError.js");
const {listingSchema }= require("./schema.js");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

main().then(()=>{
  console.log("connected to DB");
})
.catch((err) => {
  console.log(err);
});
async function main(){
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
};

app.get("/", (req, res)=>{
  res.send("helllo");
});


//validate schema

let validateListing = (req, res, next)=>{
  let {error}= listingSchema.validate(req.body);
  if(error){
    let errMsg = error.details.map((el)=>el.message).join(",");
    throw new ExpressError(400, errMsg);
  }
  else{
    next();
  }
};


//Index Route
app.get("/listings", wrapAsync(async(req, res, next)=>{
    const alllisting = await Listing.find();
    res.render("listings/index.ejs", {alllisting});
})
);


//New route
app.get("/listings/new", wrapAsync(async(req, res)=>{
  res.render("listings/new.ejs")
})
);


//show route(read)

app.get("/listings/:id", wrapAsync(async (req, res)=>{
  let {id}=req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", {listing});
})
);


//Create Route
app.post("/listings", validateListing, wrapAsync(async (req, res)=>{
  //let {title, description, image, price, location, country} = req.body;
  //const newListing = req.body.listing;
  // if(!req.body.listing){
  //   throw new ExpressError(400, "send valid data for listing");
  // };
  const newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect("/listings");
})
);


//Edit route

app.get("/listings/:id/edit", wrapAsync(async (req, res)=>{
  let {id} = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", {listing});
})
);

//update route

app.put("/listings/:id", validateListing, wrapAsync(async (req, res)=>{
  let {id}=req.params;
  await Listing.findByIdAndUpdate(id, {...req.body.listing});
  res.redirect(`/listings/${id}`);
})
);


//delete route

app.delete("/listings/:id", wrapAsync(async (req, res)=>{
  let {id} = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
})
);

// app.get("/testListing", async (req, res)=>{
//   let sampleListing = new Listing({
//     title :  "My new villa",
//     description : "by the beach",
//     price : 12000,
//     location : "Bengaluru",
//     country : "India"
//   });

//   await sampleListing.save();
//   console.log("sample is saved");
//   res.send("successful testing");
// });


app.all("*any", (req, res, next)=>{
  next(new ExpressError(404, "Page not found"))
});

app.use((err, req, res, next)=>{
  let {statusCode=500, message="something went wrong"}=err;
  //res.status(statusCode).send(message);
  res.status(statusCode).render("Error.ejs", {message});
});

app.listen(8080, ()=>{
  console.log("server is listening");
});