// Import the necessary libraries from React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the CSS files for styling
import './styles/index.css';
import './styles/ShowListStyle.css';

// Import the main App component
import App from './App';

// Create a new root for rendering the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root with React.StrictMode enabled
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
