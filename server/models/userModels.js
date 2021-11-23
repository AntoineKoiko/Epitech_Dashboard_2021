const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    screenName: String,
    accountId: String,
    profileImageUrl: String,
    spotifyAccessToken: String,
    spotifyRefreshToken: String,
    spotifyExpiresIn: String,
    redditAccessToken: String,
    redditRefreshToken: String,
    googleAccessToken: String,
    googleRefreshToken: String,
    passwordLocal: String
});

const User = mongoose.model("user", userSchema);

module.exports= User;