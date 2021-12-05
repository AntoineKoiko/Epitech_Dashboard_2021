const router = require("express").Router();
const youtubeService = require("../services/youtubeService");

router.get("/channelInfo", (req, res) => {
    const channelId = req.query.channel_id;

    youtubeService.getChannelInfo(channelId)
        .then(response => {
            res.json({title: response.title});
        })
        .catch(error => {
            res.status(500).send(error.toString());
        })
})

router.get("/videoInfo", (req, res) => {
    const videoId = req.query.video_id;

    youtubeService.getVideoInfo(videoId)
        .then(response => {
            res.json({title: response.title});
        })
        .catch(error => {
            res.status(500).send(error.toString());
        })
})

router.get("/comments", (req, res) => {
    const videoId = req.query.video_id;
    
    youtubeService.getVideoComments(videoId)
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(500).send(error.toString());
        })
})

router.get("/channelStats", (req, res) => {
    const channelId = req.query.channel_id;

    youtubeService.getChannelStats(channelId)
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(500).send(error.toString());
        })
})

router.get("/search", (req, res) => {
    const type = req.query.type;
    const query = req.query.query;

    if (type !== "channel" && type !== "video") {
        return res.send("Bad request: invalid params").status(400);
    }
    youtubeService.getItemId(query, type)
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(500).send(error.toString());
        })
})

module.exports = router;