const router = require('express').Router();
const about = require("../about.json")

router.get('/about.json', (req, res) => {
    res.json(about)
})

module.exports = router;