import React from 'react';
import Button from '@mui/material/Button';
import RegistrationForm from '../../Components/Forms/RegistrationForm';
import DefaultHeader from '../../Components/DefaultHeader';
import { createTheme } from '@mui/system';
import './RegisterPage.css';
import '../../Styles/GlobalStyle.css';

function RegisterPage() {
    return (
        <div>
            <DefaultHeader />
            <div className="center-h main-container">
                <p>Pour continuer, inscrivez-vous a Dashboard</p>

                <Button sx={theme.inputField} className="input-field" href="http://localhost:8080/auth/spotify" variant="contained">Inscrivez-vous avec google</Button>
                <Button sx={theme.inputField} className="input-field" href="http://localhost:8080/auth/reddit" variant="contained">Inscrivez-vous avec spotify</Button>
                <Button sx={theme.inputField} className="input-field" href="http://localhost:8080/auth/google" variant="contained">Inscrivez-vous avec reddit</Button>

                <h2 className="word-divider"><span>ou</span></h2>

                <RegistrationForm/>

                <div className="other-option-container">
                    <h2 className="word-divider"><span>Déja un compte ?</span></h2>
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
        maxWidth: '300px',
        width: '80%',
        marginTop: 2,
    },
});

export default RegisterPage;