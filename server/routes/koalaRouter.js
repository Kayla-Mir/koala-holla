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
router.put('/:id', (req, res) =>{
    console.log('req.params =', req.params);
    const koalaToUpdate = req.params.id;
    const sqlText = `
        UPDATE "koalas"
        SET "ready_to_transfer"=$1
        WHERE "id"=$2;
    `;
    const sqlValues = [
        'Y',
        koalaToUpdate
    ];

    pool.query(sqlText, sqlValues)
        .then((dbResult) =>{
            res.sendStatus(201);
        }).catch((dbError) =>{
            console.log(dbError);
            res.sendStatus(500);
        });
});

// DELETE
router.delete('/:id', (req, res) =>{
    console.log('req.params =', req.params);
    const koalaToDelete = req.params.id;
    const sqlText = `
        DELETE FROM "koalas"
        WHERE "id"=$1;
    `;
    const sqlValues = [
        koalaToDelete
    ];
    pool.query(sqlText, sqlValues)
        .then((dbResult) =>{
            res.sendStatus(201);
        }).catch((dbError) =>{
            res.sendStatus(500);
        });
});

module.exports = router;