// import React from 'react';
// import ReactDOM from 'react-dom';
// // import App from './App.jsx';
// import './index.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// // import ErrorPage from "./error-page";
// import "./index.css";
// import Main from './layout/Main.jsx';
// import Home from './components/Home.jsx'
// import Shop from './components/Shop.jsx'
// import About from './components/About.jsx'
// import Contact from './components/Contact.jsx'
// import SignUp from './components/SignUp.jsx'
// import SignIn from './components/SignIn.jsx';
// import AuthProviders from './providers/AuthProviders';
// import MyCart from './components/MyCart.jsx';
// // import PrivateRoute from './routes/privateRoute';
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Main></Main>,
//     children: [
//       {
//         path: '/',
//         element: <Home></Home>
//       },
//       {
//         path: '/shop',
//         element: <Shop></Shop>
//       },
//       {
//         path: '/about',
//         element: <About></About>
//       },
//       {
//         path: '/contact',
//         element: <Contact></Contact>
//       },
//       {
//         path: '/signup',
//         element: <SignUp></SignUp>
//       },
//       {
//         path: '/signin',
//         element: <SignIn></SignIn>
//       },
//       {
//         path: '/mycart',
//         element: <MyCart></MyCart>
//       },
      

//     ]
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <AuthProviders>
    
//     <RouterProvider router={router}/>
//     </AuthProviders>
//   </React.StrictMode>
// );

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProviders from './providers/AuthProviders';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProviders>
  </React.StrictMode>,
)
