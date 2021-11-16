import React from 'react';
import './StockWidget.css';
import WidgetFrame from '../WidgetFrame';
import { useState, useEffect } from 'react';

const requestOptions = {
    method: "GET",
    credentials: "include",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true
    }
}

function StockWidget({stockID}) {
    const stockName = stockID ? stockID : 'MSFT';
    const [stockInfo, setStockInfo] = useState({
        'price': 0,
        'percentChange': 0,
        'valueChange': 0,
    });

    useEffect(() => {
        fetch('http://localhost:8080/stock?name=' + stockName, requestOptions)
        .then(response => {
            if (response.status === 200)
                return response.json();
            throw new Error("failed to authenticate user")
        })
        .then(responseJSON => {
            console.log('json response', responseJSON);
            setStockInfo({
                'price': responseJSON.currentPrice,
                'percentChange': responseJSON.percentChange,
                'valueChange': responseJSON.change,
            })
        })
        .catch(error => {
            console.log('fetch error');
            // setAutenticated(false);
            // setError("Failed to authenticate user");
        })

    }, []);


    return (
        <WidgetFrame title="Stock" subtitle={stockName}>
            <div className="stock-widget">
                <p>
                    Value: {stockInfo.price}$
                      <span style={{color: stockInfo.percentChange < 0 ? '#F00' : '#0F0'}}>
                          {stockInfo.percentChange < 0 ? '-' : '+'}{stockInfo.percentChange}%
                      </span>
                </p>
                <p>
                    <span style={{color: stockInfo.valueChange < 0 ? '#F00' : '#0F0'}}>
                          {stockInfo.valueChange < 0 ? '-' : '+'}{stockInfo.valueChange}$
                      </span>
                </p>
            </div>
        </WidgetFrame>
    )
}

export default StockWidget;