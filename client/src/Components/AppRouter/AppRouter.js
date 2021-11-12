import HomePage from "../../Pages/HomePage"
import LoginPage from "../../Pages/Login/"
import RegisterPage from "../../Pages/Register/"
import DashboardPage from "../../Pages/Dashboard/DashBoardPage"

import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                {/* <Route exact path="/" element={<App />} /> */}
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/register" element={<RegisterPage />} />
                <Route exact path="/dashboard" element={<DashboardPage />} />
                {/* <Route exact path="/test" element={<HomePage />} /> */}
            </Routes>
        </Router>
    )
}