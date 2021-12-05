const passport = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;
const spotifyConfig = require("../config/spotifyConfig");
const User = require("../models/userModels");

const successfullyAuthentificated = async (req, accessToken, refreshToken, expires_in, profile, done) => {
    const actualDate = new Date();

    if (!req.user) {
        const currentUser = await User.findOne({
            accountId: profile.id
        });
        if (!currentUser) {
            const newUser = await new User({
                name: profile.username,
                screenName: profile.displayName,
                accountId: profile.id,
                spotifyAccessToken: accessToken,
                spotifyRefreshToken: refreshToken,
                spotifyExpiresIn: expires_in, //TODO: delete
                spotifyExpirationDate: actualDate.setSeconds(actualDate.getSeconds() + expires_in - 10),
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
            spotifyAccessToken: accessToken,
            spotifyRefreshToken: refreshToken,
            spotifyExpiresIn: expires_in,
            spotifyExpirationDate: actualDate.setSeconds(actualDate.getSeconds() + expires_in - 10),
        })
        console.log(currentUser);
        done(null, currentUser);
    }
    
}

passport.use(
    new SpotifyStrategy(
        {
            clientID: spotifyConfig.CLIENT_ID,
            clientSecret: spotifyConfig.SECRET_ID,
            callbackURL: spotifyConfig.CALLBACK_URL,
            passReqToCallback : true
        }, successfullyAuthentificated
    )
);
