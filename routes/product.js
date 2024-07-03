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
 
  const userId = req.query.userId;
  const iduser = Number(userId);
 try { 
  let { data: users, error1 } = await supabase
  .from('users')
  .select('*')
  .eq('id', iduser)
if (error1) {
        return res.status(500).json({ error: error1.message });
    }
  
    const { data: products, error2 } = await supabase
      .from('products')
      .select('*');
    if (error2) throw error2;
    console.log(users[0])
    console.log(products[0])
    res.render('produis', { user: users[0], products: products });
  } catch (err) {
    res.status(500).send('Erreur de base de données');
  }
});

router.get('/product/:id',async (req, res) => {
 try { 
  const productId = req.params.id;
  const productIdt = Number(productId)
  console.log(typeof productIdt)
  console.log(productIdt)
  
    const { data: products, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', productIdt)
      .single();
    if (error) throw error;
    console.log(products[0])
   res.json(products[0]);
  } catch (err) {
    res.status(500).send('Erreur de base de données');
  }
});

module.exports = router;
