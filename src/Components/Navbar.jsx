"use client";

import useAuth from '@/Hooks/useAuth';
import Link from 'next/link';
import React from 'react';
import { FaUserGraduate } from "react-icons/fa";


const Navbar = () => {

    // nav links
      const navLinks = <>
                <li className='mx-3 text-lg capitalize font-semibold'>  <Link href='/'> Home </Link> </li>
                <li className='mx-3 text-lg capitalize font-semibold'>   <Link href='/AllCollege'> Colleges </Link> </li>
                <li className='mx-3 text-lg capitalize font-semibold'>  <Link href='/Admission'> Admission</Link> </li>
                <li className='mx-3 text-lg capitalize font-semibold'>  <Link href='/MyCollege'> MyCollege</Link> </li>
             
        </>

        const {user,logout} = useAuth()
    return (
     <div className="navbar bg-base-100 shadow-sm common_padding py-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {/* responsive nav links */}
                            {navLinks}
      </ul>
    </div>
        <div className='flex items-center'>
            <FaUserGraduate className='primary_text_color text-4xl'></FaUserGraduate>
            <a className="btn btn-ghost text-xl ">  PrimeUni </a>
        </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
            {/* nav links */}
                    {navLinks}
    </ul>
  </div>
  <div className="navbar-end">

            {
            user  
            ?
             <>
          {/* dropdown menu */}
                <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="">
        <div className="">
            {
              user?.photoURL ? 
              <>
       <img
            alt=""
            src={user.photoURL}
             className='w-10 h-10 rounded-full'
             
             />
              </> : 
              
              <>
            

    <div className="bg-neutral text-neutral-content w-[50px] h-[50px] rounded-full flex justify-center  items-center">
    <span className="text-3xl">  
                  {user?.displayName.slice(0,1)}

    </span>
  </div>
            
            </>
            }
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li> <Link   className='text-lg font-semibold py-3'  href={'/Profile'}> Profile</Link> </li>
                <li>  <button onClick={logout} className='text-lg font-semibold py-3'> Log out </button> </li>
      </ul>
    </div>
             </> 
             :
              <>
                 <Link className='secondary_btn' href='/LogIn'> Log In</Link> 
                  </>
              }
  </div>
</div>
    );
};

export default Navbar;

