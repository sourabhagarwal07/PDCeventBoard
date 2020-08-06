const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: String,
  hostedBy: String,
  logoUrl: String,
  postedOn: String,
  validUntil: String,
  description: String,
  skills: String,
  category: Array,
  user: Array,
});

const Project = mongoose.model("project", projectSchema);

module.exports = Project;
