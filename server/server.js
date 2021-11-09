require('dotenv').config()

const express = require('express');
const app = express();
const serverConfig = require('./config/serverConfig');
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.get('/test', (req, res) => {
    res.json({foo: "ok"})
})

app.listen(serverConfig.SERVER_PORT, () => {
    console.log(`Dashboard server is running on port ${serverConfig.SERVER_PORT}.`);
})