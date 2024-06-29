const express = require('express');

//const ejs = require('ejs');
const path = require('path');
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());





router.get('/', (req, res) => {
const username = req.session.user;

//req.session.user=username;

 res.render('indextest', { user: username })
  });


router.get('/indextest', (req, res) => {
  const username = req.session.user;
 // console.log('hello '+ username)
  //req.session.user=username;
  
   res.render('indextest', { user: username })
    });

module.exports = router;