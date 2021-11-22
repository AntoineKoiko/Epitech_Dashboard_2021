import HomePage from "../../Pages/HomePage"
import LoginPage from "../../Pages/Login/"
import RegisterPage from "../../Pages/Register/"
import DashboardPage from "../../Pages/Dashboard/"
import RequireAuth from "../RequireAuth/RequireAuth"
import RequireNotAuth from "../RequireNotAuth"
import { AuthProvider } from "../../Context/AuthConsumer/AuthConsumer";

import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"

export default function AppRouter() {
    return (
        <Router>
           <AuthProvider> 
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route exact path="/login" element={
                    <RequireNotAuth>
                        <LoginPage />
                    </RequireNotAuth>
                } />
                <Route exact path="/register" element={
                    <RequireNotAuth>
                        <RegisterPage />
                    </RequireNotAuth>
                } />
                <Route exact path="/dashboard" element={
                    <RequireAuth>
                        <DashboardPage />
                    </RequireAuth>
                } />
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
            </AuthProvider>
        </Router>
    )
}