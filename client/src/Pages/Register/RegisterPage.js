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
                <p>To continue, sign up to Dashboard</p>

                <Button sx={theme.inputField} className="input-field" href="http://localhost:8080/auth/spotify" variant="contained">Sign up with Spotify</Button>
                <Button sx={theme.inputField} className="input-field" href="http://localhost:8080/auth/reddit" variant="contained">Sign up with Reddit</Button>
                <Button sx={theme.inputField} className="input-field" href="http://localhost:8080/auth/google" variant="contained">Sign up with Google</Button>

                <h2 className="word-divider"><span>or</span></h2>

                <RegistrationForm/>

                <div className="other-option-container">
                    <h2 className="word-divider"><span>Allready have an account ?</span></h2>
                    <Button href="/login" sx={theme.inputField} variant="contained">
                        Sign in
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