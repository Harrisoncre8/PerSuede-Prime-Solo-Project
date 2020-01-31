const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// Function that sets different queries based on the 
// weather from client side
function sqlSetup(seasonParams){
    switch(+seasonParams){
        case 1:
           return `SELECT "favorite"."user_id", "favorite"."outfits_id", "favorite"."heart_status", 
                   "outfits"."url", "outfits"."age", "outfits"."id", "outfits"."weather_id"
                   FROM "favorite"
                   FULL JOIN "outfits" ON "favorite"."outfits_id" = "outfits"."id"
                   JOIN "weather" ON "outfits"."weather_id" = "weather"."id"
                   WHERE "weather"."weather_type" = 'Summer'
                   ORDER BY RANDOM()
                   LIMIT 5;`
        case 2:
            return `SELECT "favorite"."user_id", "favorite"."outfits_id", "favorite"."heart_status", 
                    "outfits"."url", "outfits"."age", "outfits"."id", "outfits"."weather_id"
                    FROM "favorite"
                    FULL JOIN "outfits" ON "favorite"."outfits_id" = "outfits"."id"
                    JOIN "weather" ON "outfits"."weather_id" = "weather"."id"
                    WHERE "weather"."weather_type" = 'Fall'
                    ORDER BY RANDOM()
                    LIMIT 5;`
        case 3:
            return `SELECT "favorite"."user_id", "favorite"."outfits_id", "favorite"."heart_status", 
                    "outfits"."url", "outfits"."age", "outfits"."id", "outfits"."weather_id"
                    FROM "favorite"
                    FULL JOIN "outfits" ON "favorite"."outfits_id" = "outfits"."id"
                    JOIN "weather" ON "outfits"."weather_id" = "weather"."id"
                    WHERE "weather"."weather_type" = 'Winter'
                    ORDER BY RANDOM()
                    LIMIT 5;`
        case 4:
            return `SELECT "favorite"."user_id", "favorite"."outfits_id", "favorite"."heart_status", 
                    "outfits"."url", "outfits"."age", "outfits"."id", "outfits"."weather_id"
                    FROM "favorite"
                    FULL JOIN "outfits" ON "favorite"."outfits_id" = "outfits"."id"
                    JOIN "weather" ON "outfits"."weather_id" = "weather"."id"
                    WHERE "weather"."weather_type" = 'Spring'
                    ORDER BY RANDOM()
                    LIMIT 5;`
    }
}

// GET route for all outfits
router.get('/:season', rejectUnauthenticated, (req, res) => {
    let sqlQuery = sqlSetup(req.params.season);
    pool.query(sqlQuery).then(result => {
        res.send(result.rows);
    })
    .catch( error => {
        console.log('Error with GET all outfits', error);
        res.sendStatus(500);
    })
});

module.exports = router;