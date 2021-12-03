

const requestHeader = {
    method: "GET",
    credentials: "include",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Crendetials": true
    }
}

/**
 * Send GET request to our dachboard API running localy
 *
 * @param {string} url url to fetch data to
 * @returns {Promise} the response
 */
const fetchAPI = (url) => {
    return new Promise((res, rej) => {
        fetch(url, requestHeader)
            .then(response => res(response.json()))
            .catch(err => rej(err));
    });
};

/**
 * Get current and forecast weather of a city
 *
 * @param {string} city city to get weather of
 * @returns {Promise} location, curent and forecast weather of a city
 */
const fetchWeatherWidget = (city) => {
    return new Promise(async (resolve, reject) => {
        const weatherURL = new URL('http://localhost:8080/weather');
        weatherURL.searchParams.append('city', city);

        fetchAPI(weatherURL)
            .then(result => {
                resolve(result);
            })
            .catch(err => reject(err));
    });
};

/**
 * Get current information about a stock
 *
 * @param {string} stockCode code of the stock (ex: AAPL, MSFT)
 * @returns {Promise} cureent information about the stock: price, lowest, highest...
 */
const fetchStockWidget =(stockCode) => {
    return new Promise(async (resolve, reject) => {
        const stockURL = new URL('http://localhost:8080/stock');
        stockURL.searchParams.append('name', stockCode);

        fetchAPI(stockURL)
            .then(result => {
                resolve(result);
            })
            .catch(err => reject(err));
    });
};

/**
 * Get spotify top tracs for a duration
 *
 * @param {string} time_range duration to take in account (eg: short_term, medium_term, long_term)
 * @returns {Promise} list of top tracks
 */
const fetchSpotifyTopTracksWidget = (timeRange) => {
    return new Promise(async (resolve, reject) => {
        const spotifyURL = new URL('http://localhost:8080/spotify/tracks');
        spotifyURL.searchParams.append('time_range', timeRange);

        fetchAPI(spotifyURL)
            .then(result => {
                resolve(result);
            })
            .catch(err => reject(err));
    });
};

/**
 * Get a specific id in function of his id
 *
 * @param {string} id ID of the widget to get from the DB
 * @returns {Promise} Widget object
 */
const fetchWidgetById = (id) => {
    return new Promise(async (resolve, reject) => {
        const widgetURL = new URL(`http://localhost:8080/widgets/${id}`);

        fetchAPI(widgetURL)
            .then(result => {
                resolve(result);
            })
            .catch(err => reject(err));
    });
};

/**
 * Get all widgets from the DB
 *
 * @returns {Promise} list of Widget object
 */
const fetchAllWidgets = () => {
    return new Promise(async (resolve, reject) => {
        const widgetURL = new URL(`http://localhost:8080/widgets`);

        fetchAPI(widgetURL)
            .then(result => {
                resolve(result);
            })
            .catch(err => reject(err));
    });
};

/**
 * Get post of a subReddit
 *
 * @param {string} name name of the subReddditi (eg: r/mac)
 * @param {string} sort sorting of the post (eg: top, new, hot,...)
 * @returns {Promise} Widget object
 */
const fetchRedditSubFedd = (name, sort = "new") => {
    return new Promise(async (resolve, reject) => {
        const redditURL = new URL('http://localhost:8080/reddit/post');
        redditURL.searchParams.append('name', name);
        redditURL.searchParams.append('sort', sort);

        fetchAPI(redditURL)
            .then(result => {
                resolve(result);
            })
            .catch(err => reject(err));
    });
};

module.exports = {
    fetchWeatherWidget,
    fetchStockWidget,
    fetchSpotifyTopTracksWidget,
    fetchWidgetById,
    fetchAllWidgets,
    fetchRedditSubFedd
};