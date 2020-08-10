const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applySchema = new Schema({
  projectId: String,
  name: String,
  studentNumber: String,
  email: String,
  description: String,
});

const ApplyForm = mongoose.model("studentapplies", applySchema);

module.exports = ApplyForm;
