const express = require('express');
//const path = require('path');
const router = express.Router();
//const connection = require('../db');
router.use(express.urlencoded({ extended: true }));
router.use(express.json());





router.get('/history', (req, res) => {
  const username = req.session.user;
  req.session.user=username;
 
    res.render('history', { user: username });
  
      });
  



module.exports = router;