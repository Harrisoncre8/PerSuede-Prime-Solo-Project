const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// SELECT * FROM "outfits"
// JOIN "weather" ON "outfits"."weather_id" = "weather"."id"
// WHERE "weather"."weather_type" = 'Fall'
// AND "outfits"."age" = 'kid';

// GET route for outfits
router.get('/', rejectUnauthenticated, (req, res) => {
    pool.query(`SELECT * FROM "outfits" ORDER BY RANDOM() LIMIT 5`).then(result => {
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