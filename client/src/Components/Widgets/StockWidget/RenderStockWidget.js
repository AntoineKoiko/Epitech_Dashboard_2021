import React, { useCallback } from "react";
import './StockWidget.css';
import { useState, useEffect } from 'react';
import StockWidget from "./StockWidget";

import {fetchStockWidget, fetchStockName} from '../../../utils/fetchAPI';

function RenderStockWidget({stockID, refresh, widgetData, setRefreshWidget}) {
    const refreshRate = refresh !== undefined ? refresh : 60;
    const stockName = stockID ? stockID : 'MSFT';
    const [companyName, setCompanyName] = useState("");
    const [stockInfo, setStockInfo] = useState({
        loading: true
    });

    const fetchData = useCallback(() => {
        fetchStockWidget(stockName)
            .then(response => {
                setStockInfo(response);
            })
            .catch(error => {
                console.log('fetch error: ', error.toString());
            })
        fetchStockName(stockName)
            .then(response => {
                setCompanyName(response.name);
            })
            .catch(error => {
                console.log('fetch error: ', error.toString());
            })
    }, [stockName]);

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
    }, [fetchData, refreshRate, stockName]);

    return <StockWidget companyName={companyName} stockInfo={stockInfo} widgetData={widgetData}  setRefreshWidget={setRefreshWidget}/>;
}

export default RenderStockWidget;

