const express = require('express');
const router = express.Router();
//const connection = require('../db');
const { createClient } = require('@supabase/supabase-js');
const { Pool } = require('pg');

const supabaseURL = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseURL, supabaseKey);

const pool = new Pool({ connectionString: process.env.SUPABASE_BD_URL});

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get('/produis', async (req, res) => {
  try {
    const { data: products, error } = await supabase
      .from('products')
      .select('*');
    if (error) throw error;
    res.render('produis', { products , user: req.session.user});
  } catch (err) {
    res.status(500).send('Erreur de base de données');
  }
});

router.get('/product/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { data: products, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    res.render('produis', { products , user: req.session.user});
  } catch (err) {
    res.status(500).send('Erreur de base de données');
  }
  //res.json(results[0]);
});

module.exports = router;
