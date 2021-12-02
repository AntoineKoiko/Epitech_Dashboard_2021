const router = require("express").Router();
const weatherService = require("../services/weatherService");

router.get("/", (req, res) => {
    let cityName = req.query.city;

    if (!cityName) {
        return res.sendStatus(400);
    }
    weatherService.getWeather(cityName)
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(500).send(error.toString());
        })
})

router.get("/query", (req, res) => {
    console.log("Never here");
    const query = req.query.q || "Paris";

    weatherService.searchLocation(query)
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(500).send(error.toString());
        })
})

module.exports = router;