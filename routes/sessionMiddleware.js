const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

const sessionMiddleware = (req, res, next) => {
  const sessionId = req.cookies.sid || generateSessionId();
  const sessionExpiry = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 jours

  req.sessionId = sessionId;

  // Vérifie et charge la session depuis la base de données
  pool.query('SELECT sess FROM sessions WHERE sid = $1 AND expire > NOW()', [sessionId], (err, result) => {
    if (err) return next(err);

    if (result.rows.length > 0) {
      req.session = result.rows[0].sess;
    } else {
      req.session = {};
    }

    res.cookie('sid', sessionId, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });

    const originalSend = res.send;
    res.send = function (body) {
      const sessionData = {
        sid: sessionId,
        sess: req.session,
        expire: sessionExpiry
      };

      pool.query(`
        INSERT INTO sessions (sid, sess, expire)
        VALUES ($1, $2, $3)
        ON CONFLICT (sid) DO UPDATE SET sess = $2, expire = $3
      `, [sessionData.sid, sessionData.sess, sessionData.expire], (err) => {
        if (err) console.error('Erreur lors de la sauvegarde de la session:', err);
      });

      originalSend.call(this, body);
    };

    next();
  });
};

const generateSessionId = () => {
  return require('crypto').randomBytes(16).toString('hex');
};

module.exports = sessionMiddleware;
