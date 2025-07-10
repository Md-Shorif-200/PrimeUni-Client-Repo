"use client";
import { authContext } from '@/Context/AuthProvider';
import React, { useContext } from 'react';

const useAuth = () => {
            const auth = useContext(authContext)

    return auth ;
};

export default useAuth;