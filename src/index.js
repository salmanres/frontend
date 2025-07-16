import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router';
import LandingPage from './dashboard/LandingPage';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import RegisterPage from './dashboard/auth/RegisterPage';
import HomePage from './dashboard/HomePage';
import LoginPage from './dashboard/auth/LoginPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} >
          <Route path='' element={<HomePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login/:count' element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
