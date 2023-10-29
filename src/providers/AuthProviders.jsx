// import {createContext } from "react";
import{ createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({children}) => {
    
  const [user,setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [emailVerified, setEmailVerified] = useState(true);

  const createUser = (email, password) =>{
     return createUserWithEmailAndPassword(auth,email,password);
  }

  const signIn = (email,password) => {
     return signInWithEmailAndPassword(auth,email,password);
  }

  const logOut = () =>{
     return signOut(auth);
  }
  
  // ovserve onStateChange
//   useEffect(() => {
//       const unsubscribe = onAuthStateChanged(auth,currentUser => {
//            console.log('auth state change', currentUser);
//            setUser(currentUser);
//            setLoading(false);
//         });
//         return () =>{
//             unsubscribe();
//         }
//   },
//   [])
 
useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
         setEmailVerified(currentUser.emailVerified);
      }
   });
   return () => {
      unsubscribe();
   }
}, []);

  const authInfo={
     user,
     loading,
     emailVerified,
     createUser,
     signIn,
     logOut
     
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProviders.propTypes = {
    children: PropTypes.node.isRequired,
  };

  export default AuthProviders;
