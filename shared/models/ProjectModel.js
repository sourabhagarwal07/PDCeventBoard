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
  contactPhone: String,
  contactEmail: String,
  linkedinProfile: String,
  isDeleted: Boolean,
});

const Project = mongoose.model("projects", projectSchema);

module.exports = Project;
