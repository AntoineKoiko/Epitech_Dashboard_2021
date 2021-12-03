
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

const fetchWeatherWidget = async (city) => {
    return new Promise(async (resolve, reject) => {
        const weatherURL = new URL('http://localhost:8080/weather');
        weatherURL.searchParams.append('city', city);

        await fetchAPI(weatherURL)
            .then(result => {
                resolve(result);
            })
            .catch(err => reject(err));
    });
};

const fetchStockWidget = async (stockCode) => {
    return new Promise(async (resolve, reject) => {
        const stockURL = new URL('http://localhost:8080/stock');
        stockURL.searchParams.append('name', stockCode);

        await fetchAPI(stockURL)
            .then(result => {
                resolve(result);
            })
            .catch(err => reject(err));
    });
};

const fetchSpotifyTopTracksWidget = async (timeRange) => {
    return new Promise(async (resolve, reject) => {
        const spotifyURL = new URL('http://localhost:8080/spotify/tracks');
        spotifyURL.searchParams.append('time_range', timeRange);

        await fetchAPI(spotifyURL)
            .then(result => {
                resolve(result);
            })
            .catch(err => reject(err));
    });
};


const fetchWidgetById = async (id) => {
    return new Promise(async (resolve, reject) => {
        const widgetURL = new URL(`http://localhost:8080/widgets/${id}`);

        await fetchAPI(widgetURL)
            .then(result => {
                resolve(result);
            })
            .catch(err => reject(err));
    });
};

const fetchAllWidgets = async () => {
    return new Promise(async (resolve, reject) => {
        const widgetURL = new URL(`http://localhost:8080/widgets`);

        await fetchAPI(widgetURL)
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
};