import React from 'react';
import RenderStockWidget from '../../Components/StockWidget/RenderStockWidget';
import WeatherWidget from '../../Components/WeatherWidget/';

function DashboardPage() {
    return (
        <div>
            <p>I'm the dasboard page</p>
            <RenderStockWidget stockID="AAPL"/>
            <WeatherWidget cityID="Rennes"/>
        </div>
    )
}

export default DashboardPage;