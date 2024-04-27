import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Corrected import
import "./App.css";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CreateListing from "./pages/CreateListing";
import ListingDetails from "./pages/ListingDetails";
function App() {
    return (
        <div className="App">
            <Router> {/* Use Router instead of BrowserRouter */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/CreateListing" element={<CreateListing />} />
                    <Route path="/properties/:listingId" element={<ListingDetails />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
