import React from 'react';
import './StockWidget.css';
import WidgetFrame from '../WidgetFrame';
import { useState } from 'react';


function StockWidget(props) {
    const [value, setValue] =  useState(100);
    const [evolution, setEvolution] = useState(1.05);
    const stockName = props.name ? props.name : 'AAPL';


    return (
        <WidgetFrame title="Stock" subtitle={stockName}>
            <div className="stock-widget">
                <p>
                    Value: {value}$
                      <span style={{color: evolution < 0 ? '#F00' : '#0F0'}}>
                          {evolution < 0 ? '-' : '+'}{evolution}%
                      </span>
                </p>
            </div>
        </WidgetFrame>
    )
}

export default StockWidget;