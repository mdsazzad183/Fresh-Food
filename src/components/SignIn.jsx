// import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css'
import { useContext, useRef } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { sendPasswordResetEmail,getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';
const auth = getAuth(app);
const SignIn = () => {
  const emailRef = useRef();
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
    const handleSignin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email,password)
        .then(result => {
            const loggedUser = result.user;
             console.log(loggedUser)
             form.reset();
             navigate('/');
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleResetPassword = () => {
        const email = emailRef.current.value;
        if(!email){
          alert("Please provide your email address to reset");
          return;
        }
        sendPasswordResetEmail(auth,email)
        .then(() => {
            alert('Please check your email')
        })
        .catch(error =>{
        console.log(error);
        
        })
    }
  return (
    <div className='bg-slate-800'>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=" "/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={handleSignin} className="space-y-6" action="#" method="POST">
      <div>
        <label className="block text-sm font-medium leading-6 text-white">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" ref={emailRef} required className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium leading-6 text-white">Password</label>
          <div className="text-sm">
            <a onClick={handleResetPassword} href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" required className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <Link to='/signup'>
    <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign Up</a>
    </p>
    </Link>
  </div>
    </div>
    </div>
  );
};

export default SignIn;
