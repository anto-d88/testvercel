const express = require('express');

const path = require('path');
const router = express.Router();

const { createClient } = require('@supabase/supabase-js');
const { Pool } = require('pg');
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const supabaseURL = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseURL, supabaseKey);

const pool = new Pool({ connectionString: process.env.SUPABASE_BD_URL});





router.get('/', (req, res) => {
const username = "";
 res.render('indextest', { user: username })
  });



const authenticate = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  next();
};

/*router.get('/indextest', (req, res) => {
  const username = req.session.user;
  console.log(username)
  
   res.render('indextest', { user: username })
    });*/
    router.get('/indextest', async (req, res) => {

      const userId = req.query.userId;
      const id = Number(userId);
      let { data: users, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      
    if (error) {
            return res.status(500).json({ error: error.message });
        }
        console.log(users[0])
       
        //const match = await bcrypt.compare(password, user.password);
        //if (password !== user.password) return res.status(400).send('Mot de passe incorrect'); 
         
      
        res.render('indextest', { user: users[0] }); 
          });
module.exports = router;