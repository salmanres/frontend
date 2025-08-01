import React, { Suspense } from 'react';
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
// import ProductsPage from './dashboard/ProductsPage';
import ProductDetailsPage from './dashboard/ProductDetailsPage';
import ReactHookFormPage from './dashboard/ReactHookFormPage';
import ApiPage from './dashboard/ApiPage';
import { Provider } from 'react-redux';
import { store } from './dashboard/redux/Store';
import ReduxPage from './dashboard/ReduxPage';

const ProductsPage = React.lazy(() => import('./dashboard/ProductsPage'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} >
            <Route path='' element={<HomePage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login/:count' element={<LoginPage />} />
            <Route path='/login/:count' element={<LoginPage />} />
            <Route path='/redux' element={<ReduxPage />} />
            <Route path='/apipage' element={<ApiPage />} />
            <Route path='/products' element={
              <Suspense fallback={<label>loading ...</label>}>
                <ProductsPage />
              </Suspense>
            } />
            <Route path='/productdetails/:id' element={<ProductDetailsPage />} />
            <Route path='/hookform' element={<ReactHookFormPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
