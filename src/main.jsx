import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Components/Home';
import Users from './Components/Users';
import About from './Components/About';
import Contact from './Components/Contact';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/users',
        loader: () => fetch('card.json'),
        element: <Users></Users>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
