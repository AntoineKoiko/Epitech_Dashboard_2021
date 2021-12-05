const router = require("express").Router();
const redditService = require("../services/redditService");

router.get("/post", (req, res) => {
    const name = req.query.name;
    //const time = req.query.time;
    const sort = req.query.sort;

    if (!name) {
        return res.status("Error: missing subreddit name");
    }
    if (!sort || !redditService.checkValidSort(sort)) {
        return res.status("Error: invalid time params");
    }
    redditService.getSubredditPost(name, sort, "", req.user.redditAccessToken)
        .then(response => {
            console.log(response);
            res.json(response);
        })
        .catch(error => {
            res.status(500).send(error.toString());
        })
})

router.get("/search", (req, res) => {
    const query = req.query.query;

    redditService.searchSubredditsList(req.user.redditAccessToken, query)
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(500).send(error.toString());
        })
})

module.exports = router;