"use client"

import React, { createContext, useEffect, useState } from 'react';

export  const authContext =  createContext()



const AuthProvider = ({children}) => {

const [user,setUser] = useState('')



  // Firebase observer
  useEffect(() => {
    // const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

    //             setUser(currentUser)

    //   return () => {
    //     return unsubscribe();
    //   };
    // });
  },[]);































    // global data
const authInfo = {

}

return <authContext.Provider value={authInfo}>
            {children}
</authContext.Provider>
};

export default AuthProvider;