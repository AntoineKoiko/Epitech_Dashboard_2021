import { Link } from "react-router-dom"

export function Header(props) {
    const _handleSignInClick = () => {
        window.open("http://localhost:8080/auth/spotify", "_self");
    }
    
    const _handleLogoutClick = () => {
        window.open("http://localhost:8080/auth/logout", "_self");
    }

    return (
        <ul className="menu">
            <li>
                <Link to="/">Home</Link>
            </li>
            {props.authenticated ? (
                <li onClick={_handleLogoutClick}>Logout</li>
            ) : (
                <li onClick={_handleSignInClick}>Login</li>
            )}
        </ul>
    )
}