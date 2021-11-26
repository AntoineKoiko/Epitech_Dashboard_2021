import { Header } from "../Components/Header"
import React from "react"
import useAuth from "../Context/AuthConsumer/AuthConsumer"
import Button from '@mui/material/Button';
import './HomePage.css';

export default function HomePage() {
    const { authed } = useAuth();
    const { user } = useAuth();

    return (<div>
        <div>
            {!authed ? (
                <div className="container">
                    <div className="info-container">
                        <h1>Welcome!</h1>
                    </div>
                    <div className="button-container">
                        <Button variant="contained" href="/login">
                            Login
                        </Button>
                        <Button variant="contained" href="/register">
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