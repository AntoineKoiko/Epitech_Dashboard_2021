import React from "react"
import useAuth from "../Context/AuthConsumer/AuthConsumer"
import Button from '@mui/material/Button';
import DefaultHeader from "../Components/DefaultHeader";
import './HomePage.css';

export default function HomePage() {
    const { authed } = useAuth();
    const { user } = useAuth();

    return (<div>
        <DefaultHeader />
        <div>
            {!authed ? (
                <div className="container">
                    <div className="info-container">
                        <h1>Welcome!</h1>
                    </div>
                    <div className="button-container">
                        <Button sx={{width: '150px'}} variant="contained" href="/login">
                            Login
                        </Button>
                        <Button sx={{width: '150px'}} variant="contained" href="/register">
                            Register
                        </Button>
                    </div>
                </div>
            ) : (
                <div className="container">
                    <div className="info-container">
                        <h1>You have login sucessfully!</h1>
                        <h2>Welcome {user.screenName}!</h2>
                        <h2>Account ID: {user.accountId}</h2>
                    </div>
                    <div className="button-container">
                        <Button variant="contained" href="/dashboard">
                            See My Dashboard
                        </Button>
                    </div>
                </div>
            )}
        </div>
    </div>);
}