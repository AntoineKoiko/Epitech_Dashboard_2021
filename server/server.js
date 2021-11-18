require('dotenv').config()

const cookieSession = require("cookie-session");
const express = require('express');
const app = express();
const passport = require('passport');
const session = require("express-session");
const authRoutes = require("./routes/authRoutes");
const appRoutes = require("./routes/appRoutes");
const stockRoutes = require("./routes/stockRoutes");
const weatherRoutes = require("./routes/weatherRoutes");
const spotifyRoutes = require("./routes/spotifyRoutes");
const redditRoutes = require("./routes/redditRoutes");
const mongoose = require("mongoose")
const serverConfig = require('./config/serverConfig');
const cors = require('cors');
const cookieParser = require("cookie-parser")
const mongodbConfig = require("./config/mongodbConfig")

mongoose.connect(mongodbConfig.MONGODB_URI, () => {
    //TODO: GERER ERREUR DB
    console.log(`connected to mongo db: ${mongodbConfig.MONGODB_URI}`);
})

app.use(
    cookieSession({
        name: "session", 
        keys: [serverConfig.COOKIE_KEY],
        maxAge: 24 * 60 * 60 * 100
    })
)

app.use(cookieParser())

app.use(passport.initialize());

app.use(passport.session());

app.use(cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
)

app.use("/", appRoutes)
app.use("/auth", authRoutes)

const authCheck = (req, res, next) => {
    if (!req.user) {
        res.status(401).json({
            authenticated: false,
            message: "user has not been authenticated"
        });
    } else {
        next();
    }
};

app.use(authCheck);
app.use("/stock", stockRoutes); 
app.use("/weather", weatherRoutes)
app.use("/spotify", spotifyRoutes);
app.use("/reddit", redditRoutes);

app.get("/", (req, res) => {
    res.status(200);
})

app.listen(serverConfig.SERVER_PORT, () => {
    console.log(`Dashboard server is running on port ${serverConfig.SERVER_PORT}.`);
})