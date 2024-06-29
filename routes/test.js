const express = require('express');
//const ejs = require('ejs');
const path = require('path');
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());
//router.use(express.static('../views/index.ejs'));


router.get('/', (req, res) => {
 res.render('indextest', { user: req.session.user })
  });
  
  router.get('/indextest', (req, res) => {
   res.render('indextest', { user: req.session.user })
    });
    
module.exports = router;