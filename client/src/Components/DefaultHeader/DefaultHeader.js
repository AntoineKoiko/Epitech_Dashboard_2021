import React from 'react';
import './DefaultHeader.css';

import HeaderOptions from '../HeaderOptions';

function DefaultHeader({setWidgetAdded, displayOptions}) {

    return (
        <div className="header">
            <h1>Dashboard</h1>

            <div className="header-buttons">
                {displayOptions ? <HeaderOptions setWidgetAdded={setWidgetAdded}/> : <></>}
            </div>
        </div>
    )
}

export default DefaultHeader;