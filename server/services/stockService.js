const axios = require("axios");
const stockConfig = require("../config/stockConfig");
const NASDAQ100 = require("../data/nasdaq.json").corporations;

const getStockPrice = async (stockName) => {
    const stockURL = new URL(`${stockConfig.STOCK_API_URI}/quote`);

    stockURL.searchParams.append("symbol", stockName);
    try {
        const result = await axios.get(stockURL.href, {
            headers: {
                "X-Finnhub-Token": stockConfig.STOCK_API_KEY,
            }
        });
        return {
            currentPrice: result.data.c,
            change: result.data.d,
            percentChange: result.data.dp,
            highestPrice: result.data.h,
            lowestPrice: result.data.l,
            openPrice: result.data.o,
            prevClosePrice: result.data.pc,
            timestamp: result.data.t
        };
    } catch (error) {
        throw `getStockPrice ${error.toString()}`
    }
}

const getNameBySymbol = (symbol) => {
    const result = NASDAQ100.filter((elem) => {
        return elem.symbol === symbol;
    })
    return result;
}

const findStock = (query) => {
    if (!query) {
        return [];
    }
    const result = NASDAQ100.filter((elem) => {
        if (elem.name.toLowerCase().includes(query.toLowerCase())) {
            return elem;
        }
    }).map((elem) => {
        return {
            label: elem.name,
            symbol: elem.symbol
        }
    })
    return result;
}

module.exports = {
    getStockPrice,
    findStock,
    getNameBySymbol
}