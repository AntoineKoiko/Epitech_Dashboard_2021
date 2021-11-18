const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const SECRET_ID = process.env.GOOGLE_SECRET_ID;
const CALLBACK_URL = process.env.GOOGLE_CALLBACK_URL;
const YOUTUBE_API_URI = process.env.YOUTUBE_API_URI;
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

module.exports = {
    CLIENT_ID,
    SECRET_ID,
    CALLBACK_URL,
    YOUTUBE: {
        YOUTUBE_API_URI,
        YOUTUBE_API_KEY
    }
}