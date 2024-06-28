const express = require('express');
const router = express.Router();
//const connection = require('../db');

router.get('/product', async (req, res) => {
  try {
    const { data: products, error } = await supabase
      .from('products')
      .select('*');
    if (error) throw error;
    res.render('produis', { products });
  } catch (err) {
    res.status(500).send('Erreur de base de données');
  }
});

router.get('/product/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { data: product, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    res.render('produis', { product });
  } catch (err) {
    res.status(500).send('Erreur de base de données');
  }
});

module.exports = router;
