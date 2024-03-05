import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';

import RootLayout from './components/layout/RootLayout.jsx';
import { routes } from './routes.js';
import ErrorPage from './views/ErrorPage.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
    {
      routes.map(({Element, path}) => (
        <Route key={path} path={path} element={<Element />} />
      ))
    }
    <Route path='*' element={<ErrorPage />}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);
