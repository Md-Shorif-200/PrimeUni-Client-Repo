import { authContext } from '@/Context/AuthProvider';
import React, { useContext } from 'react';

const useAuth = () => {
            const auth = useContext(authContext)
    return (
        <div>
            
        </div>
    );
};

export default useAuth;