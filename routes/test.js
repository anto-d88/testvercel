const express = require('express');
//const ejs = require('ejs');
const path = require('path');
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());
//router.use(express.static('../views/index.ejs'));


router.get('/', (req, res) => {
const username = req.session.user;
console.log('hello '+ username[0])

 res.render('indextest', { user: username })
  });

module.exports = router;