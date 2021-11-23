const router = require('express').Router();
const localPassport = require("../passport/localPassport");
const about = require("../about.json");

router.get('/about.json', (req, res) => {
    res.json(about)
})

router.post("/register", (req, res) => {
    localPassport.registerUser(req, res);
})

module.exports = router;