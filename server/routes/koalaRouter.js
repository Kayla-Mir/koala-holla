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

module.exports = router;