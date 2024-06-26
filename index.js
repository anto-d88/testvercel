const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware pour servir des fichiers statiques

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Route de base
app.use(express.static(path.join(__dirname, 'public')));
//const accueilRoutes = require('./routes/test');
app.get('/', (req, res) => {
    res.render('indextest')
    //res.sendFile(path.join(__dirname, 'public', 'index.ejs'));
    });
    
    app.get('/img/imgmaquette01.jpg', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'img', 'imgmaquette01.jpg'));
    });
 
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public','main.css'));
    });
   
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'main.js'));
    });
    //   app.use(accueilRoutes);
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
