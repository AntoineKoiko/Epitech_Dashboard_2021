import { Navigate } from "react-router-dom"
import useAuth from "../../Context/AuthConsumer/AuthConsumer"; 

function RequireAuth({ children }) {
    const { authed } = useAuth();
    const { loading } = useAuth();

    if (loading)
        return (
            //TODO: Better loading handler
            <div>Loading</div>
        )    
    return authed === true
        ? children
        : <Navigate to="/login" replace />;
}

export default RequireAuth;