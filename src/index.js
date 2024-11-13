// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/tailwind.css';  // Import Tailwind CSS
import './styles/styles.css';     // Import your custom styles
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
        <App />
        </Router>
    </React.StrictMode>
);

reportWebVitals();
