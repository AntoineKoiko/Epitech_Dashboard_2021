const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const MONGODB_URI = process.env.ENV ? process.env.MONGODB_URI_PROD : process.env.MONGODB_URI;

module.exports = {
    MONGODB_URI
}