const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  linkedinId:String,
  name: String,
  email: String,
  picture: String,
  admin: Boolean,
});

const User = mongoose.model("pdc-user", userSchema);

module.exports = User;
