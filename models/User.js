const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId :  String ,
  name : String,
  email:String,
  img:String
});

mongoose.model("users", userSchema);