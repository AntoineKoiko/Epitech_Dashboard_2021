import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import AddWidgetModal from '../AddWidgetModal/AddWidgetModal';

function HeaderOptions () {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [openModal, setOpenModal] = useState(false);

    const openAddModal = () => {
        handleClose();
        setOpenModal(true);
    }

    const handler = (val) => {
        setOpenModal(val);
    }

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon/>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={openAddModal}>Add Widget</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={() => window.open("http://localhost:8080/auth/logout", "_self")}>Logout</MenuItem>
            </Menu>

            <AddWidgetModal handler={handler} open={openModal}/>
        </div>
    );
}

export default HeaderOptions;

