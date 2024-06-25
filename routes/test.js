const express = require('express');
//const ejs = require('ejs');
const path = require('path');
const router = express.Router();

const test = 10;
//router.use(express.static('../views/index.ejs'));


router.get('/', (req, res) => {
   /* connection.query('SELECT * FROM products', (err, results) => {
        if (err) {
          return res.status(500).send('Erreur de requête SQL');
        }*/
       res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>My E-Commerce</title>

  <style>
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

.boximgheader {
  width: 100%;
}
.boximgheader img {
  width: 100%;
}

.article01 {
  padding: 10%;
}

.boximgbody {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.boximgbody img {
  margin: auto;
  margin-bottom: 10vh;
  width: 60%;
}

footer {
  height: 25vh;
  width: 100%;
  background-color: #14155C;
}

header {
  height: 15vh;
  width: 100%;
  display: flex;
  background-color: #14155C;
}

.boxtextheader {
  width: 100%;
  display: flex;
  align-items: center;
}

#boxtextheader {
  color: white;
}

.nomutilisateur {
  color: white;
}

/* Sidenav menu */
.sidenav {
  height: 100%;
  width: 35vh;
  position: fixed;
  z-index: 1;
  top: 0;
  left: -35vh;
  background-color: #e8e8e8;
  padding-top: 10vh;
  transition: left 0.5s ease;
}

/* Sidenav menu links */
.sidenav a {
  padding: 3vh 3vh 3vh 3vh;
  text-decoration: none;
  font-size: 3vh;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #111;
}

.sidenav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

/* Active class */
.sidenav.active {
  left: 0;
}

/* Close btn */
.sidenav .close {
  position: absolute;
  top: 0;
  right: 3vh;
  font-size: 3vh;
}

/* Icône burger */
.burger-icon span {
  display: block;
  width: 6vh;
  height: 0.8vh;
  background-color: rgb(255, 255, 255);
  margin: 1vh 0;
}

.boxburgericon {
  height: 100%;
  width: 20vh;
  padding: 5vh;
}

* {
  font-family: "Poppins", sans-serif;
}
  </style>
</head>
<body>
    <header>
        
        <div id="mySidenav" class="sidenav">
          <a id="closeBtn" href="#" class="close">×</a>
          <ul>
            <li><a href="#">A propos</a></li>
            <li><a href="/history">L'histoire de la spiruline</a></li>
            <li><a href="/produis">Nos produits</a></li>
            <li><a href="#">Témoignages</a></li>
            <li><a href="#">Contact ${test}</a></li>
        
            <li><a href="/register">Nous rejoindre</a></li>
            <li><a href="/login">Connection</a> </li>
       
                
        
          </ul>
        </div>
        
    <section class="boxburgericon">  
        <a href="#" id="openBtn">
          <span class="burger-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </a>
      </section>  
       <section class="boxtextheader">  </section>
      </header>
      <main>
        <section class="boximgheader">
          <img src="${res.sendFile(path.join(__dirname, 'public/img', 'imgmaquette01.jpg'))}" alt="image maquette ! ">
        </section>
        <article class="article01">
          <h1>TITRE</h1>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
        </article>
        <section class="boximgbody">
          <img src="./img/imgbody01.jpg" alt="image maquette ! ">
          <img src="./img/imgbody01.jpg" alt="image maquette ! ">
          <img src="./img/imgbody01.jpg" alt="image maquette ! ">
        </section>
        <article class="article01">
          <h1>TITRE</h1>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
        </article>
    
      <section id="donnéesmysql"></section>
      </main>
      <footer>
      </footer>
    
    <script src="https://js.stripe.com/v3/"></script>
    <script>
    var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}</script>
</body>
</html>`);
       // res.render('../views/index.ejs');
       // res.render('accueil', { products: results, user: req.session.user });
     // });
     console.log("ee")
  });
module.exports = router;