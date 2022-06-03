import React, { useState, useContext } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom"

import CalculadoraPage from './pages/calculadoraPage'



const AppRoutes = () => {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<CalculadoraPage/>}/>
        </Routes>
    </Router>
    )
}

export default AppRoutes;