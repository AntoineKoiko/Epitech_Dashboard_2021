import React from "react";
import './StockWidget.css';
import { useState, useEffect } from 'react';
import StockWidget from "./StockWindget";

const requestOptions = {
    method: "GET",
    credentials: "include",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Crendetials": true
    }
}

function RenderStockWidget({stockID, refresh}) {
    const stockName = stockID ? stockID : 'MSFT';
    const [stockInfo, setStockInfo] = useState({
        'currentPrice': 0,
        'change': 0,
        'percentChange': 0,
        'highestPrice': 0,
        'lowestPrice': 0,
        'openPrice': 0,
        'prevClosePrice': 0,
        'timestamp': 0,
    });


    function fetchData() {
        fetch('http://localhost:8080/stock?name=' + stockName, requestOptions)
            .then(response => {
                if (response.status === 200)
                    return response.json();
                throw new Error("failed to authenticate user")
            })
            .then(responseJSON => {
                console.log('json response', responseJSON);
                setStockInfo(responseJSON)
            })
            .catch(error => {
                console.log('fetch error');
            // setAutenticated(false);
            // setError("Failed to authenticate user");
            })
    };

    useEffect(() => {
        console.log(`initializing interval`);
        const interval = setInterval(() => {
            console.log("stock of ", stockName, "refresh is ", refresh, " mount at ", new Date().getSeconds() );
            fetchData();
        }, 30 * 1000);

        fetchData();

        return () => {
            console.log(`clearing interval`);
            clearInterval(interval);
        };
    }, []);

    return <StockWidget stockID={stockID} stockInfo={stockInfo}/>;
}

export default RenderStockWidget;

