import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './Layout/Main';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import SignUp from './components/Pages/SignUp';
import Login from './components/Pages/Login';
import ForgotPassword from './components/Pages/ForgotPassword'
import ResetPassword from './components/Pages/ResetPassword';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/forgotPassword',
        element: <ForgotPassword></ForgotPassword>
      },
      {
        path: '/resetPassword/:token',
        element: <ResetPassword></ResetPassword>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
