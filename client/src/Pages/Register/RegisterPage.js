import React from 'react';
import GoogleLogin from 'react-google-login';
import Button from '@mui/material/Button';
import RegistrationForm from '../../Components/RegistrationForm';
import { TextField } from '@mui/material';
import { createTheme } from '@mui/system';
import './RegisterPage.css';
import '../../Styles/GlobalStyle.css';

const responseGoogle = (response) => {
    console.log(response);
}

function RegisterPage() {
    return (
        <div>
            <div className="center-h">
                <div className="main-container">
                    <p>Pour continuer, inscrivez-vous a Dashboard</p>

                    <Button sx={theme.inputField} className="input-field" href="https://www.spotify.com" variant="contained">Inscrivez-vous avec spotifyd</Button>
                    <Button sx={theme.inputField} className="input-field" href="https://www.reddit.com" variant="contained">Inscrivez-vous avec reddit</Button>
                    <GoogleLogin
                        className="input-field"
                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                        buttonText="Inscrivez-vous avec Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />

                    <h2><span>ou</span></h2>

                    <RegistrationForm/>

                    <h2><span>Déja un compte ?</span></h2>

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