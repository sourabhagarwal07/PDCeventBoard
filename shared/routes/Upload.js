const router = require("express").Router();

router.post("/upload", (req, res) => {
  res.send("uploaded successfully");
});

module.exports = router;
