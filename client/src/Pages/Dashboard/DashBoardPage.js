import React from 'react';
import RenderStockWidget from '../../Components/StockWidget/RenderStockWidget';

function DashboardPage() {
    return (
        <div>
            <p>I'm the dasboard page</p>
            <RenderStockWidget stockID="AAPL"/>
        </div>
    )
}

export default DashboardPage;