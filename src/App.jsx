import './App.css'
import React from 'react'
import AppRoutes from "./routes/AppRoutes"
import Navigation from "./components/Navigation/Navigation"

const App = () => {

    return (
        <>
            <Navigation />
            <AppRoutes />
        </>
    )
}

export default App
