const axios = require("axios");
const { YOUTUBE } = require("../config/googleConfig");

const youtubeInstance = axios.create({
    baseURL: YOUTUBE.YOUTUBE_API_URI,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    params: {
        key: YOUTUBE.YOUTUBE_API_KEY
    }
})

const getChannelInfo = async(channelId) => {
    try {
        const result = await youtubeInstance.get("/channels", {
            params: {
                part: "snippet",
                id: channelId
            }
        })
        return result.data.items[0].snippet;
    } catch (error) {
        throw `getChannelName ${error.toString()}`;
    }
}

const getVideoInfo = async(videoId) => {
    try {
        const result = await youtubeInstance.get('/videos', {
            params: {
                part: "snippet",
                id: videoId
            }
        })
        return result.data.items[0].snippet;
    } catch (error) {
        throw `getVideoInfo ${error.toString()}`;
    }
}

const getChannelStats = async(channelId) => {
    try {
        const result = await youtubeInstance.get('/channels', {
            params: {
                part: "statistics",
                id: channelId
            }
        })
        return result.data.items[0].statistics;
    } catch (error) {
        throw `getChannelStats ${error.toString()}`;
    }
}

const getVideoComments = async(videoId) => {
    try {
        const result = await youtubeInstance.get('/commentThreads', {
            params: {
                part: "snippet,replies",
                videoId: videoId
            }
        })
        return result.data.items;
    } catch (error) {
        throw `getVideoComments ${error.toString()}`;
    }
}

const getItemId = async(query, type) => {
    try {
        const result = await youtubeInstance.get('/search', {
            params: {
                part: "snippet",
                maxResults: 20,
                q: query,
                type: type
            }
        });
        const resultFormated = result.data.items.map(elem => {
            if (type === "video") {
                return {
                    id: elem.id.videoId,
                    label: elem.snippet.title
                }
            } else if (type === "channel") {
                return {
                    id: elem.id.channelId,
                    label: elem.snippet.title
                }
            }
            
        })
        return resultFormated;
    } catch (error) {
        throw `getItemId ${error.toString()}`;
    }
}

module.exports = {
    getChannelStats,
    getVideoComments,
    getItemId,
    getVideoInfo,
    getChannelInfo,
}