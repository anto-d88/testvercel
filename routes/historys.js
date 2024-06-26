const express = require('express');
const path = require('path');
const router = express.Router();
//const connection = require('../db');

router.get('/history', (req, res) => {
   /* connection.query('SELECT * FROM products', (err, results) => {
        if (err) {
          return res.status(500).send('Erreur de requête SQL');
        }*/
        //res.render('history');
       // res.render('history', { user: req.session.user });
        res.render('history', { products: results, user: req.session.user });
      });
  //});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','main.css'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main.js'));
});
module.exports = router;