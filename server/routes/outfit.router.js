const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET route for outfits
router.get('/', (req, res) => {
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