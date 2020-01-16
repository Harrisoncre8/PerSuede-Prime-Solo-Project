const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// SELECT * FROM "outfits"
// JOIN "WEATHER" ON "outfits"."id" = "weather"."outfit.id"
// WHERE "weather"."season" = 'fall'
// AND "outfit".

// GET route for outfits
router.get('/', rejectUnauthenticated, (req, res) => {
    pool.query(`SELECT * FROM "outfits"`).then(result => {
        res.send(result.rows);
    })
    .catch( error => {
        console.log('Error with GET all outfits', error);
        res.sendStatus(500);
    })
});

// POST route for outfits
router.post('/', (req, res) => {

});

module.exports = router;