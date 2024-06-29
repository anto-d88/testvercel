const express = require('express');

const path = require('path');
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());





router.get('/', (req, res) => {
const username = req.session.user;
 res.render('indextest', { user: username })
  });



const authenticate = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  next();
};

router.get('/indextest', (req, res) => {
  console.log(req.sessionStore)
  console.log(req.session)
  console.log(req.sessionID)

  const username = req.session.user;
   res.render('indextest', { user: username })
    });

module.exports = router;