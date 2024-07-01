const express = require('express');
const path = require('path');
const router = express.Router();
const supabaseURL = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseURL, supabaseKey);

const pool = new Pool({ connectionString: process.env.SUPABASE_BD_URL});
router.use(express.urlencoded({ extended: true }));
router.use(express.json());






router.get('/history', (req, res) => {

  const userId = req.query.userId;
  let { data: users, error } = await supabase
  .from('users')
  .select('*')
  .eq('id', userId)
  
if (error) {
        return res.status(500).json({ error: error.message });
    }
    const user = users[0];
    //const match = await bcrypt.compare(password, user.password);
    //if (password !== user.password) return res.status(400).send('Mot de passe incorrect'); 
     
  
    res.render('history', { user: users.username }); 
      });
  //});



module.exports = router;