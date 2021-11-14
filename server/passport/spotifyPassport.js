const passport = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;
const spotifyConfig = require("../config/spotifyConfig");
const User = require("../models/userModels");

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        })
        .catch(e => {
            done(new Error("failed to deserialize an user"));
        });
});


const successfullyAuthentificated = async (accessToken, refreshToken, expires_in, profile, done) => {
    const currentUser = await User.findOne({
        spotifyId: profile.id
    });
    if (!currentUser) {
        const newUser = await new User({
            spotifyId: profile.id
        }).save();
        if (newUser) {
            return done(null, newUser);
        }
    }
    done(null, currentUser);
}

passport.use(
    new SpotifyStrategy(
        {
            clientID: spotifyConfig.CLIENT_ID,
            clientSecret: spotifyConfig.SECRET_ID,
            callbackURL: spotifyConfig.CALLBACK_URL
        }, successfullyAuthentificated
    )
);
