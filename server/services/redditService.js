const axios = require("axios");
const redditConfig = require("../config/redditConfig");

const redditInstance = axios.create({
    baseURL: redditConfig.REDDIT_API_URI,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
});

const checkValidSort = (sort) => {
    const validSortList = ['hot', 'new', 'random', 'rising', 'top'];
    let isValid = false;

    validSortList.forEach(validSort => {
        if (validSort === sort) {
            isValid = true;
            return;
        }
    })
    return isValid;
}

const checkValidTime = (time) => {
    const validTimeList = ['hour', 'day', 'week', 'month', 'year', 'all'];

    validTimeList.forEach(validTime => {
        if (validTime === time) {
            isValid = true;
            return;
        }
    })
    return isValid;
}

const getSubredditPost = async (name, sort, time, token) => {
    if (token) {
        redditInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    } else {
        delete redditInstance.defaults.headers.common['Authorization'];
    }
    try {
        //example name: /r/mac
        //        sort: hot new random rising top
        //top addionnal params t: hour, day, week, month, year, all
        const result = await redditInstance.get(`/${name}/${sort}`, {
            params: {
                t: time
            }
        });
        return result.data;
    } catch (error) {
        throw `getSubredditPost ${error.toString()}`
    }
}

module.exports = {
    getSubredditPost,
    checkValidSort,
    checkValidTime
}