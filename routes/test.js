const express = require('express');
const router = express.Router();

router.use(express.static('../views/index.html'));

router.get('/', (req, res) => {
   /* connection.query('SELECT * FROM products', (err, results) => {
        if (err) {
          return res.status(500).send('Erreur de requête SQL');
        }*/
       // res.send('Hello!');
        res.render('../views/index.html');
       // res.render('accueil', { products: results, user: req.session.user });
     // });
     console.log("ee")
  });
module.exports = router;