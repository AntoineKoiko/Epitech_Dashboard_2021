import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from './Pages/Login/LoginPage';
import RegisterPage from './Pages/Register/RegisterPage';
import DashboardPage from './Pages/Dashboard/DashBoardPage';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<LoginPage/>} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="dashboard" element={<DashboardPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
