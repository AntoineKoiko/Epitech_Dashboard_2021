const router = require("express").Router();
const passport = require("passport");
const setupPassport = require("../passport/setupPassport");
const spotifyPassport = require("../passport/spotifyPassport");
const redditPassport = require("../passport/redditPassport");
const CLIENT_HOME_PAGE_URL = "http://localhost:3000";

router.get("/login/success", (req, res) => {
    if (req.user) {
        res.json({
            success: true,
            message: "user has successfully authenticated",
            user: req.user,
            cookies: req.cookies
        });
    } else {
        console.log("user null")
    }
})

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(CLIENT_HOME_PAGE_URL)
})

router.get("/spotify", passport.authenticate("spotify"));

router.get("/spotify/redirect", passport.authenticate("spotify", {
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect: `${CLIENT_HOME_PAGE_URL}/login?status=failed`
}))

router.get("/reddit", passport.authenticate("reddit"));

router.get("/reddit/redirect", passport.authenticate("reddit", {
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect: `${CLIENT_HOME_PAGE_URL}/login?status-failed`
}))

module.exports = router;