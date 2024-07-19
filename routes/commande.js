const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
// Route pour passer une commande

  router.get('/success', (req, res) => {
    res.render('success');
  });
  
  router.get('/cancel', (req, res) => {
    res.render('cancel');
  });
  module.exports = router;