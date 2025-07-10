'use client'
import React from 'react';
import useAxisSecure from './useAxisSecure';
import { useQuery } from '@tanstack/react-query';

const useColleges = () => {
      const axiosSecure = useAxisSecure();

      const {data:colleges=[],refetch} = useQuery({
         queryKey : ['colleges'],
         queryFn : async () => {
             const  res = await axiosSecure.get('/api/colleges');
             return res.data;
         }
      })
    return [colleges,refetch]
};

export default useColleges;