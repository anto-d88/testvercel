const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware pour servir des fichiers statiques

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Route de base



const accueilRoutes = require('./routes/test');
const historyRoutes = require('./routes/historys');
// Route About
app.use(accueilRoutes);
app.use(historyRoutes);
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
