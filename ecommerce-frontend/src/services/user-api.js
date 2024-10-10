import axios from 'axios';

const API_URL = 'http://localhost:3010/api/user'; // Adjust the URL as needed

// Function to register a new user
export const registerUser = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/register`, { username, password });
        console.log('Registration successful:', response.data);
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error registering user:', error);
        throw error; // Rethrow the error for further handling
    }
};

// Function to log in a user
export const loginUser = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { username, password });
        console.log('Login successful:', response.data);
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error; // Rethrow the error for further handling
    }
};
