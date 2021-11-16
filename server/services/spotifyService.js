const axios = require("axios");
const spotifyConfig = require("../config/spotifyConfig");

const spotifyInstance = axios.create({
    baseURL: spotifyConfig.SPOTIFY_API_URI,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
});

const checkValidTimeRange = (timeRange) => {
    const validTimeRanges = ['short_term', 'medium_term', 'long_term'];
    let isValid = false

    validTimeRanges.forEach(validTimeRange => {
        if (validTimeRange === timeRange) {
            isValid = true;
            return;
        }
    })
    return isValid;
}


const getUserTopArtists = async (timeRange, token) => {
    if (token) {
        spotifyInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token;;
    } else {
        delete spotifyInstance.defaults.headers.common['Authorization'];
    }
    try {
        const result = await spotifyInstance.get('/me/top/artists', {
            params: {
                time_range: timeRange
            }
        });
        return result.data;
    } catch (error) {
        throw `getUserTopArtists ${error.toString()}`
    }
}

const getUserTopTracks = async (timeRange, token) => {
    if (token) {
        spotifyInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    } else {
        delete spotifyInstance.defaults.headers.common['Authorization'];
    }
    try {
        const result = await spotifyInstance.get('/me/top/tracks', {
            params: {
                time_range: timeRange
            }
        });
        return result.data;
    } catch (error) {
        throw `getUserTopTracks ${error.toString()}`
    }
}

module.exports = {
    getUserTopTracks,
    getUserTopArtists,
    checkValidTimeRange
}