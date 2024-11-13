import React, { useState } from 'react';
import axios from 'axios';
import Dashboard from './admin/dashboard';

const Admin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, { email, password });
            if (response.data.message === 'Login successful!') {
                setIsLoggedIn(true);
            }
        } catch (error) {
            alert('Invalid email or password');
        }
    };

    if (isLoggedIn) {
        return <Dashboard />;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary w-full" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Admin;
