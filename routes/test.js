const express = require('express');
//const ejs = require('ejs');
const path = require('path');
const router = express.Router();

const test = 10;
//router.use(express.static('../views/index.ejs'));


router.get('/', (req, res) => {
 res.render('indextest')
  });

module.exports = router;