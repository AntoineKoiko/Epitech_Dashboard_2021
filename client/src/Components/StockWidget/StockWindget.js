import React from 'react';
import WidgetFrame from '../WidgetFrame';

function StockWidget() {
    return (
        <WidgetFrame title="Stock" subtitle="AAPL">
            <h1>Value: 100$  +1%</h1>
        </WidgetFrame>
    )
}

export default StockWidget;