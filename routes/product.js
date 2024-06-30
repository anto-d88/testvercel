const express = require('express');
const router = express.Router();
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const { Pool } = require('pg');

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const supabaseURL = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseURL, supabaseKey);

const pool = new Pool({ connectionString: process.env.SUPABASE_BD_URL});

const authenticate = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  next();
};


router.get('/produis', async (req, res) => {
  console.log(req.sessionStore)
  console.log(req.session)
  console.log(req.sessionID)
  req.session.user = req.session.user;
  const username = req.session.user;
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

router.get('/product/:id',async (req, res) => {
  req.session.user = req.session.user;
  const username = req.session.user;
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
});

module.exports = router;
