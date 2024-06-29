const express = require('express');
//const path = require('path');
const session = require('express-session');
const memorystore = require("memorystore")(session);
const router = express.Router();
//const connection = require('../db');
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.use(session({
  cookie: { maxAge: 86400000,
    secure: false,
    httpOnly: true
   },
  store: new memorystore({
    checkPeriod: 86400000 // prune expired entries every 24h
  }),
  secret: 'votre_secret',
  resave: false,
  saveUninitialized: false
}));

router.get('/history', (req, res) => {
  const username = req.session.user;
  console.log('hello '+ username)
  req.session.user=username;
        res.render('history', { user: username });
      });
  //});



module.exports = router;