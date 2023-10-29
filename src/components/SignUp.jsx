// import React from 'react'
import { Link } from 'react-router-dom';
import './SignUp'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from 'react';
import {AuthContext} from '../providers/AuthProviders';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import MyCart from './MyCart';
// import Cart from './Cart';
const SignUp = () => {
  const { emailVerified } = useContext(AuthContext);
  const {createUser} = useContext(AuthContext);
  const [error,setError] = useState('');
  const [success,setSuccess] = useState('');
  // console.log(user,createUser);
  const handleSignup = event =>{
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.cPassword.value; // Get the value of confirm password field
    const name = form.name.value;
    

    if (password !== confirmPassword) {
      setError("Passwords do not match"); // Set the error message
      setSuccess(""); // Clear success message if any
      toast.error('Passwords do not match', {
        position: 'top-right',
        autoClose: 3000, 
        hideProgressBar: true,
      });

      return; 
    }

    createUser(email,password)
    .then(result =>{
         const loggedUser = result.user;
         console.log(loggedUser);
         setError('');
         form.reset();
         setSuccess('User has been created succesfully !');
         sendVerificationEmail(result.user);
         updateUserData(result.user,name);
    })
    .catch(error => {
         console.log(error)
         setError(error.message);
         setSuccess('');
    })
}

const sendVerificationEmail = (user) => {
    sendEmailVerification(user)
    .then(result => {
        console.log(result);
        alert('Please verify your email address')
    })
}

const updateUserData = (user, name) =>{
    updateProfile(user, {
         displayName: name
    })
}

{emailVerified ? (
    <MyCart/>
  
) : (

  <p>Please verify your email to access this feature.</p>
)}

  return (
    <div className='bg-slate-800'>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=" "/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign up to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={handleSignup} className="space-y-6" action="#" method="POST">
      <div>
        <label className="block text-sm font-medium leading-6 text-white">Name</label>
        <div className="mt-2">
          <input id="name" name="name" type="text"  required className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium leading-6 text-white">Phone</label>
        <div className="mt-2">
          <input id="phone" name="number" type="number"  required className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium leading-6 text-white">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email"  required className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium leading-6 text-white">Password</label>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" required className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium leading-6 text-white">Confirm Password</label>
        </div>
        <div className="mt-2">
          <input id="cPassword" name="cPassword" type="password" required className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium leading-6 text-white">Address</label>
        <div className="mt-2">
          <input id="address" name="address" type="text"  required className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <p className='alert alert-error'>{error}</p>
      <p className='alert alert-success'>{success}</p>
      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
      </div>
      <ToastContainer />
    </form>
    
    <Link to='/signin'>
    <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign In</a>
    </p>
    </Link>
    
  </div>
    </div>
    </div>
  )
}

export default SignUp
