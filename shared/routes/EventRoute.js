const Event = require("../models/EventModel");

const router = require("express").Router();

router.post("/event", (req, res) => {
  let newEvent = req.body;
  console.log(req);
  Event.create(newEvent, (error, doc) => {
    if(error) {
      console.log(error)
    }
    res.send("event added successfully")
  })
}) 

module.exports = router;