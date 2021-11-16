const router = require("express").Router();
const spotifyService = require("../services/spotifyService");

router.get("/artists", (req, res) => {
    const timeRange = req.query.time_range;

    if (!timeRange || !spotifyService.checkValidTimeRange(timeRange)) {
        return res.sendStatus(400);
    }
    if (!req.user.spotifyAccessToken) {
        return res.send("Bad request: invalid params").status(400);
    }
    spotifyService.getUserTopArtists(timeRange, req.user.spotifyAccessToken)
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(500).send(error.toString());
        })
})

router.get("/tracks", (req, res) => {
    const timeRange = req.query.time_range;

    if (!timeRange || !spotifyService.checkValidTimeRange(timeRange)) {
        return res.send("Bad request: invalid params").status(400);
    }
    if (!req.user.spotifyAccessToken) {
        return res.send("Not authorised: no spotify token").status(400);
    }
    spotifyService.getUserTopTracks(timeRange, req.user.spotifyAccessToken)
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(500).send(error.toString());
        })
})

module.exports = router;