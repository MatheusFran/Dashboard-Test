import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './assets/components/pages/Home';
import Dashboards from './assets/components/pages/Dashboards';


// Configuração das rotas
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '', // Rota padrão Home
        element: <Home />
      },
      {
        path: 'dashboard',
        element: <Dashboards />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);