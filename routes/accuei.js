const express = require('express');

const router = express.Router();







router.get('/accueil', async (req, res) => {

 
  
    res.render('&ccueil'); 
      });
  //});



module.exports = router;