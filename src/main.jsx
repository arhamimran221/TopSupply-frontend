import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import './typography.css';
import { StatesProvider } from './Context/StatesContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <StatesProvider>
      <App /> 
    </StatesProvider>
</Router>,
)
