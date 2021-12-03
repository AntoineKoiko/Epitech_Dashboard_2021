
const requestHeader = {
    method: "GET",
    credentials: "include",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Crendetials": true
    }
}

const fetchAPI = (url) => {
    return new Promise((res, rej) => {
        fetch(url, requestHeader)
            .then(response => res(response.json()))
            .catch(err => rej(err));
    });
};

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