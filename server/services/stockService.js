const axios = require("axios");
const stockConfig = require("../config/stockConfig");

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

module.exports = {
    getStockPrice
}