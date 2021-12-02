import React from "react";
import './StockWidget.css';
import { useState, useEffect } from 'react';
import StockWidget from "./StockWidget";

import {fetchStockWidget} from '../../../utils/fetchAPI';

function RenderStockWidget({stockID, refresh, widgetData}) {
    const refreshRate = refresh !== undefined ? refresh : 60;
    const stockName = stockID ? stockID : 'MSFT';
    const [stockInfo, setStockInfo] = useState({
        loading: true
    });

    function fetchData() {
        fetchStockWidget(stockName)
            .then(response => {
                setStockInfo(response);
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

