"use client";
import useAuth from '@/Hooks/useAuth';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import SocialLogIn from '../SocialLogIn/page';
import { useRouter } from 'next/navigation';


const signUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors,isSubmitting },
  } = useForm();

      const {signUp,updateUserProfile} =  useAuth() // context api
      const  router = useRouter()


  const onSubmit = async(data) => {
    console.log('Form Submitted:', data);

      try {
            const res = await signUp(data.email, data.password);
             await updateUserProfile(data.name)
            
             toast.success('sign up successfully')
             reset();
             router('/')
       
             
      } catch (error) {
        console.log(error);
        
      }
 
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name  */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* Email  */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email address",
              },
            })}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Password  */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-[#002147]  text-white font-semibold py-2 px-4 rounded"
          >
                  {
                    isSubmitting ? 'Submitting....' : 'Sign Up'
                  }
          </button>
        </div>
      </form>
                              <h2 className=' capitalize text-base mt-2 text-end'> Already have an account ? plese <span className='font-semibold'> <Link href='/LogIn'>Log In</Link> </span> </h2>
                   <p className='text-lg capitalize my-4 text-center'>or</p>
                    <SocialLogIn></SocialLogIn>
    </div>
  );
};

export default signUpForm;
