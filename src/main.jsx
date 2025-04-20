import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Import global styles
import App from './App.jsx'; // Import the main App component
import './styles/styles.css'; // Import additional styles

// Render the App component inside the root element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
