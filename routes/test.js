const express = require('express');

//const ejs = require('ejs');
const path = require('path');
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());



router.get('/', (req, res) => {
  res.json(req.session.user);
  
});

const authenticate = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  next();
};

router.get('/', authenticate, (req, res) => {
const username = req.session.user;
console.log('hello '+ username)
req.session.user=username;

 res.render('indextest', { user: username })
  });

module.exports = router;