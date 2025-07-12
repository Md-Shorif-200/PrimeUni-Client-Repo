"use client"

import React, { createContext, useEffect, useState } from 'react';
import { app } from '../../firebase.init';
import {
    createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
 
} from "firebase/auth";
import useAxisSecure from '@/Hooks/useAxisSecure';

export  const authContext = createContext()
const auth = getAuth(app)

    // start component
const AuthProvider = ({children}) => {

const [user,setUser] = useState('');
const axiosSecure = useAxisSecure()
  console.log(user);
  


  // Firebase observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async(currentUser) => {
                   setUser(currentUser);

                       if(currentUser){

         const  userInfo = {
            UserName : currentUser.displayName,
            email : currentUser.email

          }

          
          try {
              // send user informaton  to database 
                const result = await axiosSecure.post('/prime-uni/api/users',userInfo)
              
            } catch (error) {
    
      toast.error(`someting is wrong`)
            }

      }



      return () => {
        return unsubscribe();
      };
    });
  },[]);

// creat new user with sign up
const signUp = (email,password)=> {
    return createUserWithEmailAndPassword(auth,email,password)
}

 //  firebase log in

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

//   // google logIn system
const logout = () => {
   return signOut(auth)
}


//   // update profile 
    const updateUserProfile = (name,image) => {
return updateProfile(auth.currentUser , {
    displayName : name,
    photoURL : image
})
    }








    // global data
const authInfo = {
      user,
      signUp,
      updateUserProfile,
      logIn,
      logout
}




return (
    <authContext.Provider value={authInfo}>
            {children}
</authContext.Provider>
);
};

export default AuthProvider;