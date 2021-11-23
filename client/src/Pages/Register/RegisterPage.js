import React from 'react';
import Button from '@mui/material/Button';
import RegistrationForm from '../../Components/Forms/RegistrationForm';
import { createTheme } from '@mui/system';
import './RegisterPage.css';
import '../../Styles/GlobalStyle.css';

function RegisterPage() {
    return (
        <div>
            <div className="center-h">
                <div className="main-container">
                    <p>Pour continuer, inscrivez-vous a Dashboard</p>

                    <Button sx={theme.inputField} className="input-field" href="https://www.spotify.com" variant="contained">Inscrivez-vous avec spotify</Button>
                    <Button sx={theme.inputField} className="input-field" href="https://www.reddit.com" variant="contained">Inscrivez-vous avec reddit</Button>
                    <Button sx={theme.inputField} className="input-field" href="https://www.google.com" variant="contained">Inscrivez-vous avec google</Button>

                    <h2 className="word-divider"><span>ou</span></h2>

                    <RegistrationForm/>

                    <h2 className="word-divier"><span>Déja un compte ?</span></h2>

                    <Button href="/login" sx={theme.inputField} variant="contained">
                        Se connecter
                    </Button>
                </div>
            </div>
        </div>
    )
}

const theme = createTheme({
    inputField: {
        width: '60%',
        marginTop: 2,
    },
});

export default RegisterPage;