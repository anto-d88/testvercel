const express = require('express');
const path = require('path');
const router = express.Router();
//const connection = require('../db');
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const authenticate = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  next();
};



router.get('/history', (req, res) => {
  const username = req.session.user;
    res.render('history', { user: username }); 
      });
  //});



module.exports = router;