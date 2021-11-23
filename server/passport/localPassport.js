const bcrypt = require ('bcrypt');
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/userModels");

const registerUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const displayName = email.substring(0, email.indexOf('@'));
    const saltRounds = 10;
    const currentUser = await User.findOne({
        accountId: req.body.email
    });

    if (currentUser) {
        res.status(401).send("User already exist");
    } else {
        const hash = await bcrypt.hash(password, saltRounds)

        //TODO: demander plus d'info sur le register pour remplir la table User
        const newUser = await new User({
            name: displayName,
            screenName: displayName,
            accountId: email,
            profileImageUrl: "",
            spotifyAccessToken: "",
            spotifyRefreshToken: "",
            spotifyExpiresIn: "",
            redditAccessToken: "",
            redditRefreshToken: "",
            googleAccessToken: "",
            googleRefreshToken: "",
            passwordLocal: hash
        }).save();
        if (newUser) {
            console.log("create user after register", newUser)
            res.status(200).send("Sucessfully login");
        } else {
            res.status(500).send("Failed to create user");
        }
    }
}

const successfullyAuthentificated = async (username, password, done) => {
    const currentUser = await User.findOne({
        accountId: username
    })
    if (!currentUser) {
        return done(null, false, "Aucun compte existant avec cette adresse mail.");
    }
    bcrypt.compare(password, currentUser.passwordLocal, (err, result) => {
        if (err) {
            throw err;
        }
        if (result === true) {
            return done(null, currentUser);
        } else {
            return done(null, false, "Mot de passe invalide.");
        }
    })
}

passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },successfullyAuthentificated)
);

module.exports = {
    registerUser
}