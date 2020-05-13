const express = require("express");
const router = express.Router();

//route route
router.get("/", (req, res) => {
  res.send("server is up and running");
});

module.exports = router;
