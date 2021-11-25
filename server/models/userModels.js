const mongoose = require("mongoose");
const Widget = require("./widgetModels").schema;
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required: true},
    screenName: {type: String, required: true},
    accountId: {type: String, required: true, unique: true},
    profileImageUrl: {type: String, default: ""},
    spotifyAccessToken: {type: String, default: ""},
    spotifyRefreshToken: {type: String, default: ""},
    spotifyExpiresIn: {type: String, default: ""},
    spotifyExpirationDate: {type: Number},
    redditAccessToken: {type: String, default: ""},
    redditRefreshToken: {type: String, default: ""},
    googleAccessToken: {type: String, default: ""},
    googleRefreshToken: {type: String, default: ""},
    passwordLocal: {type: String, default: ""},
    widgets: [Widget]
});

const User = mongoose.model("user", userSchema);

module.exports = User;