const express = require('express');
const router = express.Router();
//const bcrypt = require('bcrypt');
//const connection = require('../db');


router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  /*const hashedPassword = await bcrypt.hash(password, 10);
  connection.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, results) => {
    if (err) {
      return res.status(500).send('Erreur de requête SQL');
    }*/
      const { users, error } = await supabase.auth.signUp({ username, password });
      if (error) {
          return res.status(500).json({ error: error.message });
      }
    res.redirect('/');
  });


router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  /*connection.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
    if (err) {
      return res.status(500).send('Erreur de requête SQL');
    }
    if (results.length === 0) {
      return res.status(400).send('Utilisateur non trouvé');
    }
    const user = results[0];
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      req.session.user = user;
      } else {
        res.status(400).send('Mot de passe incorrect');
    }
    });*/
    const { users, session, error } = await supabase.auth.signIn({ username, password });
    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.redirect('/');
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