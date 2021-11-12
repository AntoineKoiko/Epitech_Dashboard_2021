import React from 'react';
import GoogleLogin from 'react-google-login';
import Button from '@mui/material/Button';
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

                    <p>Inscrivez-vous avec votre email:</p>
                    <TextField
                    sx={theme.inputField}
                    required
                    id="register-mail"
                    label="Quel est votre email ?"
                    variant="outlined"
                    placeholder="John.doe@email.com"
                    />
                    <TextField
                    sx={theme.inputField}
                    required
                    id="register-mail-conf"
                    label="Confirmez votre email ?"
                    variant="outlined"
                    placeholder="John.doe@email.com"
                    />

                    <TextField
                    sx={theme.inputField}
                    required
                    id="register-password"
                    label="Quel est votre mot de passe ?"
                    variant="outlined"
                    type="password"
                    autoComplete="current-password"
                    />
                    <TextField
                    sx={theme.inputField}
                    required
                    id="register-password-conf"
                    label="Confirmez votre mot de passe ?"
                    variant="outlined"
                    type="password"
                    autoComplete="current-password"
                    />

                    <Button sx={theme.inputField} variant="contained">S'inscrire</Button>

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