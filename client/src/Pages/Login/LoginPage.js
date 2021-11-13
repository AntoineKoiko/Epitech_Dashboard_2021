import React from 'react';
import GoogleLogin from 'react-google-login';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { createTheme } from '@mui/system';
import './LoginPage.css';
import '../../Styles/GlobalStyle.css';


const responseGoogle = (response) => {
    console.log(response);
}

function LoginPage() {
    return (
        <div>
            <div className="center-h">
                <div className="main-container">
                    <p>Pour continuer, connectez-vous a Dashboard</p>
                    <Button sx={theme.inputField} className="input-field" href="http://localhost:8080/auth/spotify" variant="contained">Continuer avec spotifyd</Button>
                    <Button sx={theme.inputField} className="input-field" href="https://www.reddit.com" variant="contained">Continuer avec reddit</Button>
                    <GoogleLogin
                        className="input-field"
                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                        buttonText="Continuer avec Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />

                    <h2><span>ou</span></h2>

                    <p>Continuer avec vos identifiants:</p>
                    <TextField
                    sx={theme.inputField}
                    required
                    id="login-name"
                    label="Email / Pseudo"
                    variant="outlined"
                    placeholder="John.doe@email.com"
                    />
                    <TextField
                    sx={theme.inputField}
                    required
                    id="login-name"
                    label="Mot de passe"
                    variant="outlined"
                    type="password"
                    autoComplete="current-password"
                    />
                    <Button sx={theme.inputField} variant="contained">Se Connecter</Button>

                    <h2><span>Pas encore inscrit ?</span></h2>

                    <Button href="/register" sx={theme.inputField} variant="contained">
                        S'inscire
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

export default LoginPage;
