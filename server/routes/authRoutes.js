const router = require("express").Router();
const passport = require("passport");
const setupPassport = require("../passport/setupPassport");
const spotifyPassport = require("../passport/spotifyPassport");
const redditPassport = require("../passport/redditPassport");
const googlePassport = require("../passport/googlePassport");
const localPassport = require("../passport/localPassport");

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
        res.status(401).send("User is not Login");
        console.log("user null")
    }
})

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(CLIENT_HOME_PAGE_URL)
})

router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err)
            throw err;
        if (!user) {
            res.status(401).send({error: true, msg: info});
        }
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.send("Successfully Authenticated");
            });
        }
    })(req, res, next);
});

router.get("/spotify", passport.authenticate("spotify", {
    scope: ['user-top-read']
  }));

router.get("/spotify/redirect", passport.authenticate("spotify", {
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect: `${CLIENT_HOME_PAGE_URL}/login?status=failed`
}))

router.get("/reddit", passport.authenticate("reddit", {
    state: "Foobar"
}));

router.get("/reddit/redirect", passport.authenticate("reddit", {
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect: `${CLIENT_HOME_PAGE_URL}/login?status-failed`
}))

router.get("/google", passport.authenticate("google", { 
    scope: ['profile'] 
}))

router.get("/google/redirect", passport.authenticate("google", {
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect: `${CLIENT_HOME_PAGE_URL}/login?status=failed`
}))

module.exports = router;