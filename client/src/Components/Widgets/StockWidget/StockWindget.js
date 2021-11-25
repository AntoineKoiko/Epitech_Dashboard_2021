import React from 'react';
import './StockWidget.css';
import WidgetFrame from '../WidgetFrame';

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
                <h2>${stockInfo.currentPrice}</h2>
                <h4 style={{color: stockInfo.percentChange < 0 ? '#D0312D' : '#3CB043', fontWeight: "bold" }}>
                    {stockInfo.change < 0 ? '' : '+'}{stockInfo.change} ({Math.round(stockInfo.percentChange * 100) / 100} %) aujourd'hui 
                </h4>
                <h5>Ouverture {stockInfo.openPrice}</h5>
                <h5>+Haut {stockInfo.highestPrice}</h5>
                <h5>+Bas {stockInfo.lowestPrice}</h5>
                <h5>Cours de clôture {stockInfo.prevClosePrice}</h5>
                {/* <p>
                    Value: {stockInfo.currentPrice}$
                    <span style={{color: stockInfo.percentChange < 0 ? '#F00' : '#0F0'}}>
                        {stockInfo.percentChange < 0 ? '-' : '+'}{stockInfo.percentChange}%
                    </span>
                </p>
                <p>
                    <span style={{color: stockInfo.change < 0 ? '#F00' : '#0F0'}}>
                        {stockInfo.change < 0 ? '-' : '+'}{stockInfo.change}$
                    </span>
                </p> */}
            </div>
        </WidgetFrame>
    )
}

export default StockWidget;