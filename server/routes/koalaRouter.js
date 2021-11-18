const express = require('express');
const koalaRouter = express.Router();
const pool = require('./pool')

// DB CONNECTION


// GET


// POST 
router.post('/', (req, res) => {
    console.log('POST /koalas');
    const newKoalas = req.body;
    const sqlText = (`
      INSERT INTO "koalas"
        ("name", "gender", "age", "ready_to_transfer", "notes")
      VALUES
        ($1, $2, $3, $4, $5);
    `);
    const sqlValues = [
      newKoalas.name,
      newKoalas.gender,
      newKoalas.age,
      newKoalas.ready_to_transfer,
      newKoalas.notes
    ];
    console.log(sqlText);
    pool.query(sqlText, sqlValues)
      .then((dbRes) => {
        console.log(dbRes);
        res.sendStatus(201);  // OK, CREATED
      })
      .catch((dbErr) => {
        console.error(dbErr);
      });
  });

// PUT


// DELETE


module.exports = router;
// If it is not router, change back to koalaRouter.
