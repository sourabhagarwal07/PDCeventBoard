const router = require("express").Router();

const axios = require('axios');

router.post("/events", (req, res) => {
  let data;
  axios.get(url)
  .then((res) => {
    return res.data;
  })
  .then((data) => {
    console.log(data);
    k = data;
  })
  .catch((e) => {
    console.log(e);
  });
  res.send(data);
  
});

module.exports = router;