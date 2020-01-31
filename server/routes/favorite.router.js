const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// POST route for heart status
router.post('/:imageID', rejectUnauthenticated, (req, res) => {
    console.log('WE IN THE HEART SERVER WITH', req.body)
    let sqlQuery = `INSERT INTO "favorite" ("user_id", "outfits_id", "heart_status") VALUES ($1, $2, $3);`
    pool.query(sqlQuery, [req.body.user, req.params.imageID, req.body.status]).then(result => {
        res.sendStatus(201);
    })
    .catch( error => {
        console.log('Error with POST heart status', error);
        res.sendStatus(500);
    })
});

// DELETE route for heart status
router.delete('/:imageID', rejectUnauthenticated, (req, res) => {
    console.log('NO NO NO HEART SERVER WITH', req.params, req.user)
    let sqlQuery = `DELETE FROM "favorite" WHERE "user_id" = $1 AND "outfits_id" = $2;`
    pool.query(sqlQuery, [req.user.id, req.params.imageID]).then(result => {
        res.sendStatus(201);
    })
    .catch( error => {
        console.log('Error with DELETE heart status', error);
        res.sendStatus(500);
    })
});

// GET route for favorited outfits
router.get('/:userID', rejectUnauthenticated, (req, res) => {
    let sqlQuery = `SELECT "favorite"."user_id", "favorite"."outfits_id", 
                    "favorite"."heart_status", "outfits"."url"
                    FROM "favorite"
                    JOIN "outfits" ON "outfits"."id" = "favorite"."outfits_id"
                    GROUP BY "favorite"."user_id", "favorite"."outfits_id", 
                    "favorite"."heart_status", "outfits"."url";`
    pool.query(sqlQuery).then(result => {
        res.send(result.rows);
    })
    .catch( error => {
        console.log('Error with GET favorited outfits', error);
        res.sendStatus(500);
    })
});

module.exports = router;