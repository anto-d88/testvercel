const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware pour servir des fichiers statiques

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
// Route de base


app.get('/img/imgmaquette01.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'img', 'imgmaquette01.jpg'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','main.css'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main.js'));
});
const accueilRoutes = require('./routes/test');
app.use(accueilRoutes);
const historyRoutes = require('./routes/history');
app.use(historyRoutes);
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
