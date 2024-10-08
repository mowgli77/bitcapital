import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import App from './App';
import Conditions from "./components/Conditions";
import Privacy from "./components/Privacy";

import './index.css';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/terms-and-conditions",
        element: <Conditions />,
    },
    {
        path: "/privacy-policy",
        element: <Privacy />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
