import React from 'react';
import './DefaultHeader.css';

import HeaderOptions from '../HeaderOptions';

function DefaultHeader() {

    return (
        <div className="header">
            <h1>Dashboard</h1>

            <div className="header-buttons">
                <HeaderOptions/>
            </div>
        </div>
    )
}

export default DefaultHeader;