const express = require('express');
//const ejs = require('ejs');
const router = express.Router();

const test = 10;
//router.use(express.static('../views/index.ejs'));

router.get('/', (req, res) => {
   /* connection.query('SELECT * FROM products', (err, results) => {
        if (err) {
          return res.status(500).send('Erreur de requête SQL');
        }*/
     res.render('/index.html')
  });
module.exports = router;