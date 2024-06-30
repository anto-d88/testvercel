const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');

const { createClient } = require('@supabase/supabase-js');
const { Pool } = require('pg');
const session = require('express-session');
const memorystore = require("memorystore")(session);
const app = express();
const port = 3000;
const accueilRoutes = require('./routes/test');
const historyRoutes = require('./routes/historys');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
// Route de base
// Middleware pour parser les requêtes POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// configuration connection postGreSQL
const supabaseURL = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseURL, supabaseKey);

const pool = new Pool({ connectionString: process.env.SUPABASE_BD_URL});


// Configurer les sessions
app.use(session({
 
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

// Middleware pour servir des fichiers statiques

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Route Aboute
app.use(accueilRoutes);
app.use(historyRoutes);
app.use(authRoutes);
app.use(productRoutes);
/*app.get('/about', (req, res) => {
    res.send('About Page');
 /////});
const historyRoutes = require('./routes/historys');
const accueilRoutes = require('./routes/index');
const commandeRoutes = require('./routes/commande');
//const paymentRoutes = require('./routes/payment');

app.use(historyRoutes);
app.use(accueilRoutes);
app.use(commandeRoutes);
//app.use(paymentRoutes);
    
// Route Contact
app.get('/contact', (req, res) => {
    res.send('Contact Page');
});*/

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
