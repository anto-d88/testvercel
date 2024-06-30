const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
//const bcrypt = require('bcrypt');
//const connection = require('../db');
// configuration connection postGreSQL
const { createClient } = require('@supabase/supabase-js');
const { Pool } = require('pg');
const session = require('express-session');
const memorystore = require("memorystore")(session);
const supabaseURL = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseURL, supabaseKey);

const pool = new Pool({ connectionString: process.env.SUPABASE_BD_URL});
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Configurer les sessions
router.use(session({
 
  store: new memorystore({
    checkPeriod: 86400000, // Vérifie les sessions expirées toutes les 24h (en millisecondes)
    max: 100, // Nombre maximum de sessions à conserver en mémoire
    ttl: 86400, // Durée de vie des sessions en secondes (24h)
    stale: true, // Permet de supprimer les sessions "stale" (vieillies)
    secret: process.env.SESSION_SECRET, // Secret utilisé pour signer le cookie de session
    resave: false, // Ne sauvegarde pas la session si elle n'est pas modifiée
    saveUninitialized: true // Ne crée pas de session si elle n'est pas initialisée
  }),
   cookie: { maxAge: 86400000,
    secure: false,
    httpOnly: true
   },
  secret: process.env.SESSION_SECRET || 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));

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
      }
      req.session.user = user;
      res.redirect('indextest')
  });


router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;


  let { data: users, error } = await supabase
  .from('users')
  .select('*')
  .eq('username', username)
  console.log(users)
if (error) {
        return res.status(500).json({ error: error.message });
    }
    const user = users[0];
    //const match = await bcrypt.compare(password, user.password);
    if (password !== user.password) return res.status(400).send('Mot de passe incorrect'); 
      req.session.user = user;
      res.render('indextest', { user: req.session.user })
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
