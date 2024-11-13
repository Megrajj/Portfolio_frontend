import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Admin from './pages/Admin';  // New Admin Page
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

const App = () => {
    const location = useLocation();

    // Define routes where Navbar should not appear
    const noNavbarRoutes = ['/admin'];

    return (
        <>
            {/* Conditionally render Navbar */}
            {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
            
            <div className={!noNavbarRoutes.includes(location.pathname) ? 'mt-[64px]' : ''}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/admin" element={<Admin />} /> {/* Admin Route */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
