 "use client"
import Ratings from '@/Components/Ratings';
import useColleges from '@/Hooks/useColleges';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Loading from '../loading';

const FeaturedCollege = () => {
    const [colleges,refetch] = useColleges();


     if(!colleges || colleges.length === 0){
  return <Loading></Loading>
}





 const sortedCollege =  [...colleges].sort((a, b) => b.researchCount - a.researchCount);
 const feturedCollege = sortedCollege.slice(0, 3);



    return (

      <div>
         {
           !colleges ? 
           
           <>
            <p>loading......</p>
           </>
           : 
           <>
             <div className='featurd_college_section common_padding my-10 '>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize font-semibold mt-4 mb-8 text-center'>Our Featured College</h1>
                <div className="featured_college_card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                     {
                        feturedCollege.map((college,index) =>{
                             return (
                                  <div
          key={index}
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
        >
          {/* Image */}
          <div className="relative w-full h-[220px] sm:h-[250px]">
            <Image
              src={college.image}
              alt={college.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Card Info */}
          <div className="p-5 space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 capitalize">
              {college.name}
            </h2>

            <Ratings value={college.rating} />

            <p className="text-base sm:text-lg text-gray-700">
              <span className="font-semibold">Admission Date:</span>{' '}
              {college.admissionDate}
            </p>

            <p className="text-base sm:text-lg text-gray-700">
              <span className="font-semibold">Academic Researches:</span>{' '}
              {college.researchCount}
            </p>

            {/* Button */}
            <div className="text-right mt-4">
              <Link
                className="primary_btn "
                href={`/AllCollege/${college._id}`}
              >
                See Details
              </Link>
            </div>
          </div>
        </div>
                             )
                        })
                     }
                </div>
        </div>
           </>
         }

       </div>
    );
};

export default FeaturedCollege;