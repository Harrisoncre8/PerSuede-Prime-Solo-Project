const axios = require('axios');
const express = require('express');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// GET route for weather
router.get('/:zipCode', rejectUnauthenticated, (req, res) => {
    let appID=process.env.API_KEY;
    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${req.params.zipCode},us&appid=${appID}&units=imperial`)
        .then( response => {
            res.send( response.data );
        })
        .catch ( error => {
            console.log('Error getting weather from API', error);
            res.sendStatus(500);
        })
})

module.exports = router;