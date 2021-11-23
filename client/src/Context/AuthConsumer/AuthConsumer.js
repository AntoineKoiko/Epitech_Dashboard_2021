import * as React from "react";

const authContext = React.createContext();

const requestOptions = {
    method: "GET",
    credentials: "include",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true
    }
}

function useAuth() {
    const [authed, setAuthed] = React.useState(false);
    const [user, setUser] = React.useState({});
    const [loading, setLoading] = React.useState({});

    React.useEffect(() => {
        setLoading(true);
        fetch("http://localhost:8080/auth/login/success", requestOptions)
            .then(response => {
                if (response.status === 200)
                    return response.json();
                throw new Error("failed to authenticate user")
            })
            .then(responseJSON => {
                setUser(responseJSON.user);
                setAuthed(true);
                setLoading(false);
            })
            .catch(error => {
                setAuthed(false);
                setUser({});
                setLoading(false);
            })
    }, []);

    return {
        authed,
        loading,
        user,
    };
}

export function AuthProvider({ children }) {
    const auth = useAuth();

    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}

export default function AuthConsumer() {
    return React.useContext(authContext);
}