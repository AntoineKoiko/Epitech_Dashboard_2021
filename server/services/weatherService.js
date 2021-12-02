const axios = require("axios");
const weatherConfig = require("../config/weatherConfig")

const getWeather = async (cityName) => {
    const weatherURL = new URL(`${weatherConfig.WEATHER_API_URI}forecast.json`)

    weatherURL.searchParams.append("key", weatherConfig.WEATHER_API_KEY);
    weatherURL.searchParams.append("lang", "fr");
    weatherURL.searchParams.append("days", 3);
    weatherURL.searchParams.append("q", cityName);
    try {
        const result = await axios.get(weatherURL.href);
        return result.data;
    } catch (error) {
        throw `getWeather ${error.toString()}`;
    }
}

const searchLocation = async(query) => {
    const searchURL = new URL(`${weatherConfig.WEATHER_API_URI}search.json`);

    searchURL.searchParams.append("key", weatherConfig.WEATHER_API_KEY);
    searchURL.searchParams.append("q", query);

    try {
        const result = await axios.get(searchURL.href);
        const resultArray = result.data.map(element => {
            return {label: element.name}
        })
        return resultArray;
    } catch (error) {
        throw `searchLocation ${error.toString()}`;
    }
}

module.exports = {
    getWeather,
    searchLocation
}