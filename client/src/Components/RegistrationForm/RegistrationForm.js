import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { createTheme } from '@mui/system';

function RegistrationForm() {
    return (
        <>
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
        </>

    )
}

const theme = createTheme({
    inputField: {
        width: '60%',
        marginTop: 2,
    },
});

export default RegistrationForm;