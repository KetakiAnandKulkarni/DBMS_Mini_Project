import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Sections/signup.css'; // Adjust path if needed

const Signup = () => {
    const [designation, setDesignation] = useState('employee');
    const [employeeId, setEmployeeId] = useState('');
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        // Add logic to handle signup
        console.log('Sign up details:', {
            designation,
            employeeId,
            name,
            department,
            username,
            password,
        });
        // Redirect to login page after signup
        navigate('/login');
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2 className="signup-title">Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <div className="input-group">
                        <label htmlFor="designation">Designation</label>
                        <select
                            id="designation"
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)}
                            className="form-control"
                            required
                        >
                            <option value="admin">Admin</option>
                            <option value="employee">Employee</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label htmlFor="employeeId">Employee ID</label>
                        <input
                            type="text"
                            id="employeeId"
                            value={employeeId}
                            onChange={(e) => setEmployeeId(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="department">Department</label>
                        <input
                            type="text"
                            id="department"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            required
                        />
                    </div>

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

                    <button type="submit" className="signup-button">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;

