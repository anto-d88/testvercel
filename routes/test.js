const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
   /* connection.query('SELECT * FROM products', (err, results) => {
        if (err) {
          return res.status(500).send('Erreur de requête SQL');
        }*/
       // res.send('Hello!');
        res.render('./accueil.ejs');
       // res.render('accueil', { products: results, user: req.session.user });
      });
  //});
module.exports = router;