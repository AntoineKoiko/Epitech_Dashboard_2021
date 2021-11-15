const axios = require("axios");
const weatherConfig = require("../config/WeatherConfig")

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
        throw `getWeather ${error.toString()}`
    }
}

module.exports = {
    getWeather
}