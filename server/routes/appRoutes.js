const router = require('express').Router();
const moment = require("moment");
const localPassport = require("../passport/localPassport");
const services = require("../about.json").services;

router.get('/about.json', (req, res) => {
    const aboutJson = {
        client: {
            host: req.ip
        },
        server: {
            current_time: moment().unix(),
            services: services
        }
    }
    res.json(aboutJson)
})

router.post("/register", (req, res) => {
    localPassport.registerUser(req, res);
})

module.exports = router;