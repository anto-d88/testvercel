const express = require('express');
const app = express();
const port = 3000;

// Middleware pour servir des fichiers statiques
app.use(express.static('public'));

// Route de base
const accueilRoutes = require('./routes/test');


app.use(accueilRoutes);
// Route About
/*app.get('/about', (req, res) => {
    res.send('About Page');
});

// Route Contact
app.get('/contact', (req, res) => {
    res.send('Contact Page');
});*/

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
