import React from 'react';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/system';
import LoginForm from '../../Components/Forms/LoginForm/';
import DefaultHeader from "../../Components/DefaultHeader/"
import './LoginPage.css';
import '../../Styles/GlobalStyle.css';

function LoginPage() {
    return (
        <>
            <DefaultHeader/>
            <div className="center-h main-container">
                <p>Pour continuer, connectez-vous a Dashboard</p>
                <Button sx={theme.inputField} className="input-field" href="http://localhost:8080/auth/spotify" variant="contained">Continuer avec spotifyd</Button>
                <Button sx={theme.inputField} className="input-field" href="http://localhost:8080/auth/reddit" variant="contained">Continuer avec reddit</Button>
                <Button sx={theme.inputField} className="input-field" href="http://localhost:8080/auth/google" variant="contained">Continuer avec google</Button>
                <h2 className="word-divider"><span>ou</span></h2>
                <LoginForm/>

                <div className="other-option-container">
                    <h2 className="word-divider"><span>Pas encore inscrit ?</span></h2>
                    <Button href="/register" sx={theme.inputField} variant="contained">
                S'inscire
                    </Button>
                </div>
            </div>
        </>
    )
}

const theme = createTheme({
    inputField: {
        maxWidth: '300px',
        width: '80%',
        marginTop: 2,
    },
});

export default LoginPage;
