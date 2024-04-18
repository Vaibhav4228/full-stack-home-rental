import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Corrected import
import "./App.css";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <div className="App">
            <Router> {/* Use Router instead of BrowserRouter */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
