import './App.css';
import React from 'react'
import AppRouter from "./Components/AppRouter/"
import DefaultHeader from "./Components/DefaultHeader/"

function App() {
    return (
        <div>
            <DefaultHeader />
            <AppRouter/>
        </div>
    );
}

export default App;