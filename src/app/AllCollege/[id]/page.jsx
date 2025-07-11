"use client";
import useColleges from '@/Hooks/useColleges';
import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Rating from 'react-rating';
import Ratings from '@/Components/Ratings';
import Loading from '@/app/loading';

const Page = () => {
  const { id } = useParams();
  const [colleges] = useColleges();
  const college = colleges?.find(data => data._id === id);

  if (!college) {
    return  <Loading></Loading>;
  }

  return (
    <div className=" w-full sm:w-[80%] mx-auto common_padding my-10 rounded-lg">
      {/* Image */}
      <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
        <Image
          src={college.image}
          alt={college.name}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      {/*  College Details Section */}
      <div className="mx-auto px-4 md:px-8 py-10 shadow-lg bg-white">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 capitalize">
          {college.name}
        </h1>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  
          <div className="space-y-4">
              <p>  <Ratings value={college.rating}></Ratings> </p>
            <p className="text-gray-700"><span className="font-semibold">Admission Date:</span> {college.admissionDate}</p>
            <p className="text-gray-700"><span className="font-semibold">Research Papers:</span> {college.researchCount}</p>
          </div>


          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Research History</h2>
            <p className="text-gray-700 leading-relaxed">{college.researchHistory}</p>
          </div>
        </div>

        {/* Events & Sports */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Events */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Upcoming Events</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              {college.events?.map((event, idx) => (
                <li key={idx}>{event}</li>
              ))}
            </ul>
          </div>

          {/* Sports */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Available Sports</h2>
            <div className="flex flex-wrap gap-2">
              {college.sports?.map((sport, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium shadow"
                >
                  {sport}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
