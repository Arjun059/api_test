const express = require('express');
const router = express.Router();
// const express = require("express");

router.get('/test', (req, res) => {
  res.send('test Rotues');
});     

module.exports = router;
