const axios = require("axios");
const User = require("../models/userModels");
const spotifyConfig = require("../config/spotifyConfig");

const spotifyInstance = axios.create({
    baseURL: spotifyConfig.SPOTIFY_API_URI,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
});

const refreshSpotifyToken = async (userId, refreshToken) => {
    const authOptions = {
        url: "https://accounts.spotify.com/api/token",
        method: 'post',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            'Authorization': 'Basic ' + Buffer.from(spotifyConfig.CLIENT_ID + ':' + spotifyConfig.SECRET_ID).toString('base64') 
        },
        params: {
            grant_type: 'refresh_token',
            refresh_token: refreshToken
        },
        json: true
    };
  
    try {
        const response = await axios(authOptions);
        const actualDate = new Date();

        if (response.status === 200) {
            await User.findOneAndUpdate({
                _id: userId
            }, {
                spotifyAccessToken: response.data.access_token,
                spotifyExpirationDate: actualDate.setSeconds(actualDate.getSeconds() + response.data.expires_in - 10)
            });
            return response.data.access_token;
        } else {
            throw `refreshSpotifyToken: Bad response code ${response.statusCode}`;
        }
    } catch (error) {
        throw `refreshSpotifyToken: ${error.toString()}`;
    }
}

const shouldRefreshToken = (req, res, next) => {
    if (!req.user.spotifyExpirationDate || req.user.spotifyExpirationDate < new Date()) {
        refreshSpotifyToken(req.user._id, req.user.spotifyRefreshToken)
            .then(accessToken => {
                req.user.spotifyAccessToken = accessToken;
                next();
            }).catch(error => {
                next();
            })
    } else {
        next();
    }
}

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
    checkValidTimeRange,
    shouldRefreshToken
}