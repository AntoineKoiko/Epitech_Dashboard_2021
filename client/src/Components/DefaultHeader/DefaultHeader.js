import React, { useEffect } from 'react';
import './DefaultHeader.css';
import { useState } from 'react';

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

import AddWidgetModal from '../AddWidgetModal/AddWidgetModal';
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