import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


function SettingModal ({open, openHandler}) {
    return (
        <div>
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


                    <Button sx={{width: '60%', marginTop: 2}} className="input-field" href="http://localhost:8080/auth/spotify" variant="contained">Continuer avec spotifyd</Button>
                    <Button sx={{width: '60%', marginTop: 2}} className="input-field" href="http://localhost:8080/auth/reddit" variant="contained">Continuer avec reddit</Button>
                    <Button sx={{width: '60%', marginTop: 2}} className="input-field" href="http://localhost:8080/auth/google" variant="contained">Continuer avec google</Button>
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => openHandler(false)}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default SettingModal;

