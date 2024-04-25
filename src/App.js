// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import RegulatoryUpdatePage from './pages/RegulatoryUpdatePage';
import InvoicesPage from './pages/InvoicesPage';
import StatisticsPage from './pages/StatisticsPage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
// import LogoutPage from './pages/LogoutPage';
import NotFound from './pages/NotFound';
import HomePage from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    const isAuthenticated = !!localStorage.getItem('user');

    return (
        <Router>
         <div>
            
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />} />
                {/* <Route path="/logout" element={isAuthenticated ? <Navigate to="/login" /> : <LogoutPage />} /> */}
                <Route path="/signup" element={isAuthenticated ? <Navigate to="/dashboard" /> : <SignUpPage />} />
                <Route path="/dashboard" element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />} />
                <Route path="/regulatory-updates" element={isAuthenticated ? <RegulatoryUpdatePage /> : <Navigate to="/login" />} />
                <Route path="/invoices" element={isAuthenticated ? <InvoicesPage /> : <Navigate to="/login" />} />
                <Route path="/statistics" element={isAuthenticated ? <StatisticsPage /> : <Navigate to="/login" />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
           
            </div>
        </Router>
    );
};

export default App;
