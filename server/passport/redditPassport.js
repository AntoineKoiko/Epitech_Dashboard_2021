const passport = require("passport");
const RedditStrategy = require("passport-reddit").Strategy;
const redditConfig = require("../config/redditConfig")
const User  = require ("../models/userModels")

const sucessfullyAuthentificated = async(accessToken, refreshToken, profile, done) => {
    const currentUser = await User.findOne({
        accountId: profile.id
    })
    if (!currentUser) {
        const newUser = await new User({
            name: profile.name,
            screenName: profile.name,
            accountId: profile.id,
            profileImageUrl: "",
            spotifyAccessToken: "",
            spotifyRefreshToken: "",
            spotifyExpiresIn: "",
            redditAccessToken: accessToken,
            redditRefreshToken: refreshToken,
        }).save();
        if (newUser) {
            return done(null, newUser);
        }
    }
    done(null, currentUser);
}

passport.use(
    new RedditStrategy({
        clientID: redditConfig.CLIENT_ID,
        clientSecret: redditConfig.SECRET_ID,
        callbackURL: redditConfig.CALLBACK_URL,
        state: "FOOBAR"
    }, sucessfullyAuthentificated)
)