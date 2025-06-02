import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Homepage from './components/Homepage/Homepage';
import AuthProvider from './Provider/AuthProvider';
import Login2 from './components/Login/Login2';
import UserProfile from './components/UserProfile/UserProfile';
import PrivateRoutes from './components/Routes/PrivateRoutes';
import DashboardLayout from './components/Dashboard/DashboardLayout';
import Furnitures from './components/Categories/Furnitures/Furnitures';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Homepage></Homepage>
      },
      {
        path: '/login',
        // element: <Login></Login>
        element: <Login2></Login2>
      },
      {
        path: '/categories/:category',
        loader: ({ params }) => {
          // You can also return the param directly if needed
          return { category: params.category };
        },
        element: <Furnitures></Furnitures>
      },
      // {
      //   path: '/categories/furnitures',
      //   element: <Furnitures></Furnitures>
      // },
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoutes>< DashboardLayout /></PrivateRoutes>,
    children: [
      {
        path: '/dashboard',
        element: <UserProfile></UserProfile>
      },
      {
        path: '/dashboard/cart',
        element: <UserProfile></UserProfile>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
