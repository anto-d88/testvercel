const express = require('express');
const path = require('path');
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());





router.get('/history', (req, res) => {

  const userId = req.query.userId;
  
    res.render('history', { user: userId }); 
      });

router.get('/history:userId', (req, res) => {

  const userId = req.params.userId;
  
    res.render('history', { user: userId }); 
      });
  //});



module.exports = router;