const express = require('express');
const router = express.Router();
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const { Pool } = require('pg');
const session = require('express-session');
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
 
  const userId = req.query.userId;
  const iduser = Number(userId);
  let { data: users, error } = await supabase
  .from('users')
  .select('*')
  .eq('id', iduser)
if (error) {
        return res.status(500).json({ error: error.message });
    }
  try {
    const { data: products, error } = await supabase
      .from('products')
      .select('*');
    if (error) throw error;
   // console.log(users[0].username)
    res.render('produis', { products: products }, { user: users[0].username });
  } catch (err) {
    res.status(500).send('Erreur de base de données');
  }
});

router.get('/product/:id',async (req, res) => {
  const { id } = req.params;

  try {
    const { data: products, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    
   res.render('produis', { products: products });
  } catch (err) {
    res.status(500).send('Erreur de base de données');
  }
});

module.exports = router;
