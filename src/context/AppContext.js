import React, { createContext, useState } from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user data when logged in or registered

  // loginUser function
  const loginUser = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      console.log('Login Response:', response.data); // Log the response for debugging
      setUser(response.data.user); // Set user data after successful login
      return true; // Success
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message); // Log error details
      return false; // Failed login
    }
  };

  // signupUser function
  const signupUser = async (name, email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
      console.log('Registration Success:', response.data); // Log success response
      setUser(response.data.user); // Store the registered user data
      return true; // Success
    } catch (error) {
      console.error('Registration Error:', error.response?.data || error.message); // Log error details
      return false; // Failed registration
    }
  };

  return (
    <AppContext.Provider value={{ user, loginUser, signupUser }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
