const express = require('express');
const router = express.Router();
const pool = require('./pool');
// DB CONNECTION


// GET
router.get('/', (req, res) => {
    const sqlText = 'SELECT * FROM koalas;'
    pool.query(sqlText)
      .then((dbRes) => {
        const koalasFromDB = dbRes.rows;
        res.send(koalasFromDB)
      }).catch((dbErr) => {
        console.error(dbErr);
      });
});

// POST


// PUT


// DELETE

module.exports = router;