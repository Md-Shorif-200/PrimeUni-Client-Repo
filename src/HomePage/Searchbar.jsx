import React from 'react';
import { IoSearch } from "react-icons/io5";

const Searchbar = () => {
  return (
    <div className='w-full h-[120px] bg-[#002147] flex justify-center items-center'>
      <div className="w-[35%] bg-white relative rounded-md">
        <input
          type="search"
          required
          placeholder="Search your College"
          className='w-full pl-12 pr-4 py-3 rounded-md  text-black font-semibold text-lg focus:outline-none '
        />
        <div className='absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500'>
          <IoSearch className='text-2xl' />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
