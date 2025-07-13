'use client'
import axios from 'axios';
import React from 'react';

const useAxisSecure = () => {
                const axiosSecure = axios.create({
                      baseURL : 'https://prime-uni-server.vercel.app/'
                })

                return axiosSecure
};

export default useAxisSecure;