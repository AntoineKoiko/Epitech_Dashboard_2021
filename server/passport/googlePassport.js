const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const googleConfig = require("../config/googleConfig");
const User = require("../models/userModels");

const successfullyAuthentificated = async (accessToken, refreshToken, profile, cb) => {
    const currentUser = await User.findOne({
        accountId: profile.id
    });
    if (!currentUser) {
        const newUser = await new User({
            name: profile.name.familyName + profile.name.givenName,
            screenName: profile.displayName,
            accountId: profile.id,
            profileImageUrl: profile._json.picture,
            spotifyAccessToken: "",
            spotifyRefreshToken: "",
            spotifyExpiresIn: "",
            redditAccessToken: "",
            redditRefreshToken: "",
            googleAccessToken: accessToken,
            googleRefreshToken: refreshToken,
        }).save();
        if (newUser) {
            return cb(null, newUser);
        }
    }
    cb(null, currentUser);
}

passport.use(
    new GoogleStrategy(
        {
            clientID: googleConfig.CLIENT_ID,
            clientSecret: googleConfig.SECRET_ID,
            callbackURL: googleConfig.CALLBACK_URL

        }, successfullyAuthentificated
    )
);