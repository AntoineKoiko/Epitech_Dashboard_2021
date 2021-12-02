import React from 'react';
import './StockWidget.css';
import WidgetFrame from '../WidgetFrame';

function StockWidget({stockID, stockInfo, widgetData}) {
    const tableur = [
        {label: "Ouverture", value: Math.round(stockInfo.openPrice * 100) / 100},
        {label: "+Haut", value: Math.round(stockInfo.highestPrice * 100) / 100},
        {label: "+Bas", value: Math.round(stockInfo.lowestPrice * 100) / 100},
        {label: "Cours de clôture", value: Math.round(stockInfo.prevClosePrice * 100) / 100},
    ];

    return (
        <WidgetFrame title="Stock" subtitle={stockID} widgetId={widgetData._id} loadingCircle={stockInfo.loading}>
            <div className="stock-widget">
                <h2>${stockInfo.currentPrice}</h2>
                <h4 style={{color: stockInfo.percentChange < 0 ? '#D0312D' : '#3CB043', fontWeight: "bold", margin: "0 0 4% 0"}}>
                    {stockInfo.change < 0 ? '' : '+'}{(Math.round(stockInfo.change * 100) / 100).toFixed(2)} ({Math.round(stockInfo.percentChange * 100) / 100} %) aujourd'hui
                </h4>
                <table style={{width: "100%"}}>
                    <tbody>
                        {
                            tableur.map((value) => {
                                return <tr key={value.label}>
                                    <td><h5>{value.label}</h5></td>
                                    <td style={{textAlign: "right"}}><h5>{value.value.toFixed(2)}</h5></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </WidgetFrame>
    )
}

export default StockWidget;