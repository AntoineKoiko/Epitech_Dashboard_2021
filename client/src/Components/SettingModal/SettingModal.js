import React, { useCallback, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import './SettingModal.css';
import { fetchServiceAvailable } from '../../utils/fetchAPI';

function SettingModal ({open, openHandler}) {
    const [availableService, setAvailableService] = useState({});

    const getAvailableService = useCallback(() => {
        fetchServiceAvailable()
            .then(response => {
                setAvailableService(response);
            })
            .catch(error => {
                console.log("Error to get available service: ", error.toString());
            })
    }, []);

    useEffect(() => {
        getAvailableService();
    }, [getAvailableService]);

    return (
        <Dialog
            open={open}
            onClose={() => openHandler(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Connect with other service ?"}
            </DialogTitle>
            <DialogContent>
                <div className="btn-container">
                    <>
                        {!availableService.spotifyAvailable ? <Button sx={{width: '60%', marginTop: 2}} className="input-field" href="http://localhost:8080/auth/spotify" variant="contained">Add spotify account</Button> : <></>}
                        {!availableService.redditAvailable ? <Button sx={{width: '60%', marginTop: 2}} className="input-field" href="http://localhost:8080/auth/reddit" variant="contained">Add reddit account</Button> : <></>}
                    </>
                </div>
            </DialogContent>

            <DialogActions>
                <Button onClick={() => openHandler(false)}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default SettingModal;

