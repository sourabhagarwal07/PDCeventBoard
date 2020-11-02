const router = require("express").Router();
const User = require("../models/UserModel");

router.get("/completeuserlist", (req, res) => {
  User.find((error, data) => {
    if (error) {
      console.log(error);
    }
    res.send(data);
  });
});

module.exports = router;
