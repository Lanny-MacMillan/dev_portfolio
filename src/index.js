import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { reportWebVitalsToGA } from './reportWebVitalsToGa';

process.env.REACT_APP_NODE_ENV === 'development'
  ? reportWebVitals(console.log)
  : reportWebVitals(reportWebVitalsToGA);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
