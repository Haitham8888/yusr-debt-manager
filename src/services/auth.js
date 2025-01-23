// src/services/auth.js

const API_URL = 'https://your-api-url.com'; // Replace with your actual API URL

export const login = async (username, password) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        localStorage.setItem('token', data.token); // Store token in local storage
        return data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

export const logout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
};

export const isAuthenticated = () => {
    return localStorage.getItem('token') !== null; // Check if user is authenticated
};