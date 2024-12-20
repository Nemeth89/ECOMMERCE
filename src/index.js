import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import './index.css';
import App from './App';
import { AppProvider } from './context/AppContext';

// Create a root for the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use root.render() to render the app, without passing the container again
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
