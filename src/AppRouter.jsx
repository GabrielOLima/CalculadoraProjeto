import React, { useState, useContext } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom"

import calculadoraPage from './pages/calculadoraPage'



const AppRoutes = () => {
    <Router>
        <Routes>
            <Route exact path="/" element={<calculadoraPage/>}/>
        </Routes>
    </Router>
}

export default AppRoutes;