'use client'
import useColleges from '@/Hooks/useColleges';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllCollege = () => {
            const [colleges,refetch] = useColleges();
            
     return (
        <div className=' w-full  college_card common_padding my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10'>
            {
                colleges.map((college,index) => {
                      return(
                         <div key={index} className="card w-full h-auto ">
                               <Image src={college.image}
                               width={200}
                               height={100}
                               alt='card-image'
                                className='w-full h-[250px] object-cover'
                                
                                ></Image>

                                <div className="card_info shadow-md p-4">
                                     <h1 className='text-lg sm:text-xl md:text-2xl font-semibold capitalize mt-3 mb-2'> {college.name} </h1>

                                     <p> rating : {college.rating} </p>

                                     <p className='text-base sm:text-lg font-semibold capitalize'>  Admission  Date : <span className='text-gray-700 font-normal'> {college.admissionDate} </span> </p>
                                     <p className='text-base sm:text-lg font-semibold capitalize'>   Academic Researches : <span className='text-gray-700 font-normal'> {college.researchCount} </span> </p>
                                            <div className="card_btn text-end">
                                                     <Link className='primay_btn btn-sm my-2 ' href=''>See details</Link>
                                            </div>

                                </div>
                         </div>
                      )
                }  )
            }

        </div>
    );
};

export default AllCollege;