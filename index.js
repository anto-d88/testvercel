const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
//const mysql = require('mysql2');
const { createClient } = require('@supabase/supabase-js');
const { Pool } = require('pg');
const session = require('express-session');
const memorystore = require("memorystore")(session);
const app = express();
const port = 3000;
dotenv.config(); // Charge les variables d'environnement du fichier .env

// configuration connection postGreSQL
const supabaseURL = process.env.SUPABASE_BD_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseURL, supabaseKey);

const pool = new Pool({ connectionString: process.env.SUPABASE_BD_URL});


// Configurer les sessions
app.use(session({
  cookie: { maxAge: 86400000 },
  store: new memorystore({
    checkPeriod: 86400000 // prune expired entries every 24h
  }),
  secret: 'votre_secret',
  resave: false,
  saveUninitialized: false
}));

// Middleware pour servir des fichiers statiques

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Route de base
// Middleware pour parser les requêtes POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const accueilRoutes = require('./routes/test');
const historyRoutes = require('./routes/historys');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
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
