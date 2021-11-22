import React from 'react';
import './StockWidget.css';
import WidgetFrame from '../WidgetFrame';
import { useState, useEffect } from 'react';

function StockDetail ({stockInfo}) {
    return (
        <div className="stock-widget">
            <p>
                lowestPrice: {stockInfo.lowestPrice}
            </p>
            <p>
                Highest price: {stockInfo.highestPrice}
            </p>
            <p>
                Open price: {stockInfo.openPrice}
            </p>
            <p>
                Last close price: {stockInfo.prevClosePrice}
            </p>
        </div>
    )
}

function StockWidget({stockID, stockInfo}) {
    const expandContent = <StockDetail stockInfo={stockInfo} />;

    return (
        <WidgetFrame title="Stock" subtitle={stockID} expand={true} expandContent={expandContent}>
            <div className="stock-widget">
                <p>
                    Value: {stockInfo.currentPrice}$
                      <span style={{color: stockInfo.percentChange < 0 ? '#F00' : '#0F0'}}>
                          {stockInfo.percentChange < 0 ? '-' : '+'}{stockInfo.percentChange}%
                      </span>
                </p>
                <p>
                    <span style={{color: stockInfo.valueChange < 0 ? '#F00' : '#0F0'}}>
                          {stockInfo.change < 0 ? '-' : '+'}{stockInfo.change}$
                      </span>
                </p>
            </div>
        </WidgetFrame>
    )
}

export default StockWidget;