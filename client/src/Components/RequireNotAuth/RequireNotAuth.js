import { Navigate } from "react-router-dom"
import useAuth from "../../Context/AuthConsumer/AuthConsumer"

function RequireNotAuth({ children }) {
    const { authed } = useAuth();
    const { loading } = useAuth();

    if (loading)
        return (
            //TODO: Better loading handler
            <div>Loading</div>
        )
    return authed === false
        ? children
        : <Navigate to="/dashboard" replace />;
}

export default RequireNotAuth;