const express = require('express');
const router = express.Router();
//const connection = require('../db');
const { createClient } = require('@supabase/supabase-js');
const { Pool } = require('pg');

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const supabaseURL = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseURL, supabaseKey);

const pool = new Pool({ connectionString: process.env.SUPABASE_BD_URL});



router.get('/produis', async (req, res) => {
  const username = req.session.user;
  req.session.user=username;
  try {
    const { data: products, error } = await supabase
      .from('products')
      .select('*');
    if (error) throw error;
    res.render('produis', { products: products , user: username});
  } catch (err) {
    res.status(500).send('Erreur de base de données');
  }
});

router.get('/product/:id', async (req, res) => {
  const username = req.session.user;
  console.log('hello '+ username)
  req.session.user=username;
  const { id } = req.params;
  try {
    const { data: products, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
   res.render('produis', { products: products , user: username});
  } catch (err) {
    res.status(500).send('Erreur de base de données');
  }
  //res.json(results[0]);
});

module.exports = router;
