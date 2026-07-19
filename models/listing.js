const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title :{
    type : String,
    required : true
  },
  description : String,
  image :{
    //type : String,
   // default : "https://www.wallpaper.com/architecture/residential/link-house-family-complex-openideas-india",
    //set : (v)=> v === "" ? "https://www.wallpaper.com/architecture/residential/link-house-family-complex-openideas-india" : v,
  },
  price : Number,
  location :String,
  country : String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
