import React, { useEffect } from 'react';
import './DefaultHeader.css';
import { useState } from 'react';

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

import AddWidgetModal from '../AddWidgetModal/AddWidgetModal';

function DefaultHeader() {
    const [openModal, setOpenModal] = useState(false);

    const handler = (val) => {
         setOpenModal(val);
    }

    useEffect(() => {
        setOpenModal(false);
    }, [])

    return (
        <div className="header">
            <h1>Dashboard</h1>
            <div className="header-buttons">
                <ButtonGroup size="small" disableElevation variant="contained">
                    <Button sx={{backgroundColor: "#003459"}} onClick={handler(true)}>
                        <AddCircleOutlineRoundedIcon/>Add
                    </Button>

                    <Button sx={{backgroundColor: "#003459"}} >
                        <LogoutRoundedIcon/>Logout
                    </Button>
                </ButtonGroup>
            </div>
            <AddWidgetModal handler={handler} open={openModal}/>
        </div>
    )
}

export default DefaultHeader;