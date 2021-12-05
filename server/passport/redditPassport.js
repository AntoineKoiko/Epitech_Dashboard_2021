const passport = require("passport");
const RedditStrategy = require("passport-reddit").Strategy;
const redditConfig = require("../config/redditConfig")
const User  = require ("../models/userModels")

const sucessfullyAuthentificated = async(req, accessToken, refreshToken, profile, done) => {
    
    if (!req.user) {
        const currentUser = await User.findOne({
            accountId: profile.id
        })
        if (!currentUser) {
            const newUser = await new User({
                name: profile.name,
                screenName: profile.name,
                accountId: profile.id,
                redditAccessToken: accessToken,
                redditRefreshToken: refreshToken,
            }).save();
            if (newUser) {
                return done(null, newUser);
            }
        }
        done(null, currentUser);
    } else {
        const currentUser = await User.findOneAndUpdate({
            _id: req.user._id
        }, {
            redditAccessToken: accessToken,
            redditRefreshToken: refreshToken,
        })
        console.log(currentUser);
        done(null, currentUser);
    }
}

passport.use(
    new RedditStrategy({
        clientID: redditConfig.CLIENT_ID,
        clientSecret: redditConfig.SECRET_ID,
        callbackURL: redditConfig.CALLBACK_URL,
        scope: [ 'read', 'identity' ],
        passReqToCallback : true
    }, sucessfullyAuthentificated)
)