import React from "react";
import './StockWidget.css';
import { useState, useEffect } from 'react';
import StockWidget from "./StockWidget";

const requestOptions = {
    method: "GET",
    credentials: "include",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Crendetials": true
    }
}

function RenderStockWidget({stockID, refresh, widgetData}) {
    const refreshRate = refresh !== undefined ? refresh : 60;
    const stockName = stockID ? stockID : 'MSFT';
    const [stockInfo, setStockInfo] = useState({
        loading: true
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
            })
    };

    useEffect(() => {
        console.log(`initializing interval`);
        const interval = setInterval(() => {
            console.log("stock of ", stockName, "refresh is ", refreshRate, " mount at ", new Date().getSeconds() );
            fetchData();
        }, refreshRate * 1000);

        fetchData();

        return () => {
            console.log(`clearing interval`);
            clearInterval(interval);
        };
    }, []);

    return <StockWidget stockID={stockID} stockInfo={stockInfo} widgetData={widgetData}/>;
}

export default RenderStockWidget;

