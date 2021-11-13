const passport = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;
const spotifyConfig = require("../config/spotifyConfig");
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((id, done) => {
    done(null, id);
});


const successfullyAuthentificated = async (accessToken, refreshToken, expires_in, profile, done) => {
    process.nextTick(function() {
        return done(null, profile);
    })
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
