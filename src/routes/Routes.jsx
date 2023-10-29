import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Shop from '../components/Shop';
import MyCart from '../components/MyCart';

import SignUp from '../components/SignUp'
import Home from '../components/Home'
import About from '../components/About';
import Contact from '../components/Contact';

import SignIn from '../components/SignIn';
import PrivateRoute from "./PrivateRoute";

import Dashboard from "../layout/Dashboard";
// import MyCart from "./pages/Dashboard/MyCart/MyCart";
import { CartProvider } from './CartContext'; // Import your cart context

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <CartProvider> {/* Wrap your route configuration with CartProvider */}
        <MyCart/>
        <Main></Main>
        
      </CartProvider>
    ),
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/shop',
        element: <Shop></Shop>,
      },
      {
        path: '/mycart',
        element: <MyCart></MyCart>,
      },
      {
        path: '/about', 
        element: <About></About>
      },
      {
        path: '/contact', 
        element: <Contact></Contact>
      },
      
      {
        path: 'signin',
        element: <SignIn></SignIn>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      // Add other routes as needed
    ],
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // Add routes for the dashboard as needed
    ],
  },
]);
