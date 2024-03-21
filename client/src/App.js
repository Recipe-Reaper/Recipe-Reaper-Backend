import React from 'react';
import {BrowserRouter as Router, Routes,Route, Navigate} from "react-router-dom";
import './App.css';
import Home from './Home.js';
import Login from './Login.js';
import Groceries from './Groceries.js';


function App() {
    return (
        <div id="wrapper">
            <Router>
                <Routes>
                    <Route 
                        path="/login"
                        element={<Login />}
                    />
                    <Route 
                        path="/groceries"
                        element={<Groceries />}
                    />
                    <Route 
                        path="*"
                        element={<Home />}
                    />
                </Routes>
            </Router>
        </div>
    )
}

export default App;
