'use client'
import useColleges from '@/Hooks/useColleges';
import React from 'react';

const AllCollege = () => {
            const [colleges,refetch] = useColleges();
            console.log(colleges);
            
     return (
        <div>
                
        </div>
    );
};

export default AllCollege;