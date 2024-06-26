const express = require('express');
const path = require('path');
const router = express.Router();
//const connection = require('../db');

router.get('/history', (req, res) => {
   
        res.render('history');
      });
  //});



module.exports = router;