const express = require('express');
//const ejs = require('ejs');
const router = express.Router();


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
    <link rel="stylesheet" href=".public/main.css">
    <title>My E-Commerce</title>

  <link rel="stylesheet" href="./main.css">
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
            <li><a href="#">Contact</a></li>
        
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
          <img src="./img/imgmaquette01.jpg" alt="image maquette ! ">
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
    <script src="/main.js"></script>
</body>
</html>`);
       // res.render('../views/index.ejs');
       // res.render('accueil', { products: results, user: req.session.user });
     // });
     console.log("ee")
  });
module.exports = router;