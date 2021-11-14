import { Header } from "../Components/Header"
import React from "react"

const requestOptions = {
    method: "GET",
    credentials: "include",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true
    }
}

export default function HomePage() {
    const [authenticated, setAutenticated] = React.useState(false);
    const [user, setUser] = React.useState({});
    const [error, setError] = React.useState({});
    
    React.useEffect(() => {
        fetch("http://localhost:8080/auth/login/success", requestOptions)
        .then(response => {
            if (response.status === 200)
                return response.json();
            throw new Error("failed to authenticate user")
        })
        .then(responseJSON => {
            setUser(responseJSON.user);
            setAutenticated(true);
        })
        .catch(error => {
            setAutenticated(false);
            setError("Failed to authenticate user");
        })

    }, []);

    return (<div>
        <Header
            authenticated={authenticated}
            handleNotAuthenticated={() => setAutenticated(false)}
        />
        <div>
            {!authenticated ? (
                <h1>Welcome!</h1>
            ) : (
                <div>
                    <h1>You have login sucessfully!</h1>
                    <h2>Welcome {user.name}!</h2>
                    <h2>Spotify ID: {user.spotifyId}</h2>
                </div>
            )}
        </div>
    </div>);
}