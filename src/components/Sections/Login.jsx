import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Sections/login.css"; // Correct path to login.css

const Login = () => {
    const [role, setRole] = useState('admin');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(`Logging in as ${role} with username: ${username}`);
        if (role === 'admin') {
            navigate('/admin-dashboard');
        } else {
            navigate('/employee-dashboard');
        }
    };

    const handleSignupRedirect = () => {
        navigate('/signup');
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Login</h2>

                <div className="role-switch">
                    <button
                        className={`role-button ${role === 'admin' ? 'active' : ''}`}
                        onClick={() => setRole('admin')}
                    >
                        Admin
                    </button>
                    <button
                        className={`role-button ${role === 'employee' ? 'active' : ''}`}
                        onClick={() => setRole('employee')}
                    >
                        Employee
                    </button>
                </div>

                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>

                <div className="signup-link">
                    <p>
                        Don't have an account?{' '}
                        <span className="link" onClick={handleSignupRedirect}>
                            Sign up here
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;




