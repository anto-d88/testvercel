const express = require('express');
//const ejs = require('ejs');
const path = require('path');
const router = express.Router();

const test = 10;
//router.use(express.static('../views/index.ejs'));


router.get('/', (req, res) => {
 res.render('indextest')
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
module.exports = router;