import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { createTheme } from '@mui/system'
import "./LoginForm.css"

const requestOptions = {
    method: "Post",
    credentials: "include",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true
    },
}

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function loginReq() {
        const config = {...requestOptions, body: JSON.stringify({
            email: email,
            password: password
        })}
        fetch("http://localhost:8080/auth/login", config)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        loginReq();
    }

    return (
        <form className="form-login" onSubmit={handleSubmit}>
            <p>Continuer avec vos identifiants:</p>
            <TextField
                sx={theme.inputField}
                required
                id="login-email"
                label="Email / Pseudo"
                type="email"
                variant="outlined"
                placeholder="John.doe@email.com"
                onChange={e => setEmail(e.target.value)}
            />
            <TextField
                sx={theme.inputField}
                required
                id="login-password"
                label="Mot de passe"
                variant="outlined"
                type="password"
                autoComplete="current-password"
                onChange={e => setPassword(e.target.value)}

            />
            <Button type="submit" sx={theme.inputField} variant="contained">Se Connecter</Button>
        </form>
    )
}

const theme = createTheme({
    inputField: {
        width: '60%',
        marginTop: 2,
    },
});

export default LoginForm;
