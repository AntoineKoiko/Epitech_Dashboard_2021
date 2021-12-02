import React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


function UpdateWidgetModal ({handler, open}) {
    const handleClose = () => {
        handler(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                {"Which widget do you want to add ? "}
            </DialogTitle>
            <DialogContent>
                    test
            </DialogContent>

            <DialogActions>
                <Button autoFocus onClick={handleClose}>
              Cancel
                </Button>
                <Button onClick={handleClose} autoFocus>
              Update
                </Button>
            </DialogActions>

        </Dialog>
    )
}

export default UpdateWidgetModal;

