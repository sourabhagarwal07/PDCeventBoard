const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: String,
  start: String,
  end: String,
  currency: String,
  online_event: Boolean,
  summary: String,
  description: String,
  logo_id:String
})

const Event = mongoose.model("event", eventSchema);

module.exports = Event;