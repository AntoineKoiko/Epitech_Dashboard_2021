import { useState } from "react";
import { TextField, Button, Alert } from '@mui/material';
import { createTheme } from '@mui/system';
import './RegistrationForm.css';

const requestOptions = {
    method: "POST",
    credentials: "include",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true
    },
}

function RegistrationForm() {
    const [email, setEmail] = useState("");
    const [emailConfirm, setEmailConfirm] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError ] = useState(false);
    const [passwordErrorText, setPasswordErrorText ] = useState(false);
    const [registerErrorMsg, setRegisterErrorMsg] = useState("");

    function registerReq() {
        const config = {...requestOptions, body: JSON.stringify({
            "email": email,
            "password": password
        })}
        console.log(config)
        fetch("http://localhost:8080/register", config)
            .then(response => {
                if (response.status === 200) {
                    window.open("http://localhost:3000/login", "_self");
                }
                if (response.status === 500) {
                    setRegisterErrorMsg("Internal Server Error.");
                }
                if (response.status === 401) {
                    setRegisterErrorMsg("Cet email est déjà enregistré.");
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    function validateEmail() {
        if (email !== emailConfirm) {
            setEmailError(true);
            return false;
        }
        return true;
    }

    function validatePassword() {
        if (password.length < 8) {
            setPasswordError(true);
            setPasswordErrorText("Utilisez 8 caractères ou plus pour votre mot de passe.");
            return false;
        }
        if (password !== passwordConfirm) {
            setPasswordError(true);
            setPasswordErrorText("Ces mots de passe ne correspondent pas. Veuillez réessayer.");
            return false;
        }
        return true;
    }

    function validateForm() {
        let errorMail = validateEmail();
        let errorPassword = validatePassword();

        if (!errorMail || !errorPassword)
            return false;
        return true;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setEmailError(false)
        setPasswordError(false);
        setPasswordErrorText("");
        if (!validateForm()) {
            event.preventDefault();
            return;
        }
        console.log("Username:", email, " password:", password);
        registerReq();
    }

    return (
        <form className="form-register" onSubmit={handleSubmit}>
            <p className="white">Sign up with your email:</p>
            <TextField
                sx={theme.inputField}
                required
                error={emailError}
                id="register-mail"
                label="What is your email ?"
                variant="outlined"
                type="email"
                placeholder="John.doe@email.com"
                onChange={e => setEmail(e.target.value)}
                helperText={emailError ? "Les emails ne correspondent pas !" : ""}
                color="primary"
                focused
            />
            <TextField
                sx={theme.inputField}
                required
                error={emailError}
                id="register-mail-conf"
                label="Confirm your email"
                variant="outlined"
                type="email"
                placeholder="John.doe@email.com"
                onChange={e => setEmailConfirm(e.target.value)}
                helperText={emailError ? "Les emails ne correspondent pas !" : ""}
                color="primary"
                focused
            />

            <TextField
                sx={theme.inputField}
                required
                error={passwordError}
                id="register-password"
                label="Choose a password"
                variant="outlined"
                type="password"
                autoComplete="current-password"
                onChange={e => setPassword(e.target.value)}
                helperText={passwordError ? passwordErrorText : ""}
                color="primary"
                focused
            />
            <TextField
                sx={theme.inputField}
                required
                error={passwordError}
                id="register-password-conf"
                label="Confirm your password"
                variant="outlined"
                type="password"
                autoComplete="current-password"
                onChange={e => setPasswordConfirm(e.target.value)}
                helperText={passwordError ? passwordErrorText : ""}
                color="primary"
                focused
            />
            {
                registerErrorMsg.length ? <Alert severity="error">{registerErrorMsg}</Alert> : <></>
            }

            <Button type="submit" sx={theme.inputField} variant="contained">Sign UP</Button>
        </form>

    )
}

const theme = createTheme({
    inputField: {
        width: '60%',
        maxWidth: '300px',
        marginTop: 2,
    },
});

export default RegistrationForm;