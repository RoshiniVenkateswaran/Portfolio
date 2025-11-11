import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Ensure body has clean background
document.body.style.backgroundColor = '#FFFFFF';
document.body.style.color = '#111827';
document.body.style.margin = '0';
document.body.style.padding = '0';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('❌ Root element not found!');
  document.body.innerHTML = '<div style="padding: 50px; color: #ff4444; background: #ffffff; min-height: 100vh; font-family: monospace;"><h1>Error: Root element not found!</h1></div>';
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
  } catch (error) {
    console.error('❌ Fatal error:', error);
    rootElement.innerHTML = `
      <div style="padding: 50px; color: #ff4444; background: #ffffff; min-height: 100vh; font-family: monospace; width: 100%; box-sizing: border-box;">
        <h1>❌ Fatal Error</h1>
        <pre>${error.toString()}</pre>
        <pre style="font-size: 12px; margin-top: 20px; color: #64748b;">${error.stack}</pre>
      </div>
    `;
  }
}