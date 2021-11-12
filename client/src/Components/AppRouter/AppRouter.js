import HomePage from "../../Pages/HomePage"
import LoginPage from "../../Pages/Login/"
import RegisterPage from "../../Pages/Register/"
import DashboardPage from "../../Pages/Dashboard/"

import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                {/* <Route exact path="/" element={<HomePage />} /> */}
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/register" element={<RegisterPage />} />
                <Route exact path="/dashboard" element={<DashboardPage />} />
            </Routes>
        </Router>
    )
}