"use client";

import useColleges from "@/Hooks/useColleges";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Searchbar = () => {
  const [colleges] = useColleges();
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const router = useRouter();

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const results = colleges.filter((college) =>
        college.name.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(results);
    } else {
      setFiltered([]);
    }
  };

  const handleSelect = (college) => {
    setQuery("");
    setFiltered([]); 
    router.push(`/AllCollege/${college._id}`); // details page
  };

  return (
    <div className="w-full h-[120px] primary_bg_color flex justify-center items-center">
      <div className="w-[35%] bg-white relative rounded-md">
        <input
          type="search"
          value={query}
          onChange={handleSearch}
          placeholder="Search your College"
          className="w-full pl-12 pr-4 py-3 rounded-md text-black font-semibold text-lg focus:outline-none"
        />
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500">
          <IoSearch className="text-2xl" />
        </div>

        {filtered.length > 0 && (
          <ul className="absolute z-20 w-full bg-white border rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg">
            {filtered.map((college) => (
              <li
                key={college._id}
                onClick={() => handleSelect(college)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black font-medium"
              >
                {college.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Searchbar;
