const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
//const bcrypt = require('bcrypt');
//const connection = require('../db');
// configuration connection postGreSQL
const { createClient } = require('@supabase/supabase-js');
const { Pool } = require('pg');
const supabaseURL = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseURL, supabaseKey);

const pool = new Pool({ connectionString: process.env.SUPABASE_BD_URL});
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', async (req, res) => {
 /* const { usernames, passwords } = req.body;
 console.log(usernames , passwords)*/
 //password = await bcrypt.hash(password, 10);
 console.log(req.body.username, req.body.password)
 
 const { data, error } = await supabase
 .from('users')
 .insert([
   { username: req.body.username, password: req.body.password },
  ])
  .select()
  if (error) {
    return res.status(500).json({ error: error.message });
    console.log(req.body.username, req.body.password)
      }

    res.redirect('/');
  });


router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;


  let { data: users, error } = await supabase
  .from('users')
  .select([{username: username}])
  
if (error) {
        return res.status(500).json({ error: error.message });
    }
    const user = users[0];
    console.log(user)
    //const match = await bcrypt.compare(password, user.password);
    if (password == user.password) {
      req.session.user = user;
      res.redirect('/');
    } else {
      res.status(400).send('Mot de passe incorrect');
    }
});



router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).send('Erreur lors de la déconnexion');
    }
    res.redirect('/');
  });
});

module.exports = router;
