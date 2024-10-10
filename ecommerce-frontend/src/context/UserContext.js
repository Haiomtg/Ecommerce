import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { registerUser, loginUser } from '../services/user-api';

// Create UserContext
const UserContext = createContext(null);

// UserProvider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleRegister = async (username, password) => {
        try {
            const [result, error] = await registerUser(username, password);
            if (error) {
                console.error('Registration failed:', error);
            } else {
                setUser(result); // Set user state on successful registration
                console.log('Registration successful:', result);
            }
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    const handleLogin = async (username, password) => {
        try {
            const result = await loginUser(username, password);
            setUser(result); // Set user state on successful login
            console.log('Login successful:', result);
            navigate('/'); // Redirect to home after login
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <UserContext.Provider value={{ user, handleRegister, handleLogin }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use the UserContext
export const useUserContext = () => {
    return useContext(UserContext);
};