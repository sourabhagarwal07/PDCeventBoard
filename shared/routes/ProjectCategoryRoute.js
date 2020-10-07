const Project = require("../models/ProjectCategoryModel");

const router = require("express").Router();
router.get("/projectCategory", (req, res) => {
    projectCategoryOptions.find({}, (error, data) => {
      if (error) {
        console.log(error);
      }
      res.send(data);
    });
  });
  module.exports = router;
  