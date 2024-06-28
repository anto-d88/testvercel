const express = require('express');
//const path = require('path');
const router = express.Router();
//const connection = require('../db');
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get('/history', (req, res) => {
   
        res.render('history', { user: req.session.user });
      });
  //});



module.exports = router;