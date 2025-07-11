'use client'

import React from 'react';
import useAxisSecure from './useAxisSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmission = () => {
    const axiosSecure = useAxisSecure();
    const {data : admissions = [], refetch,isLoading} = useQuery({
        queryKey : ['admissions'],
        queryFn : async () => {
             const res = await axiosSecure.get('/api/admission');
             return res.data;
        }
    })
    return [admissions,refetch,isLoading]
};

export default useAdmission;