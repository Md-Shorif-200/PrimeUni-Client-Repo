"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";
import useAuth from "@/Hooks/useAuth";
import Link from "next/link";
import SocialLogIn from "../SocialLogIn/page";
import { useRouter } from "next/navigation";



const logInForm = () => {
  const { logIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors ,isSubmitting},
    reset
  } = useForm();

  const onSubmit = async (data) => {

    try {
      await logIn(data.email, data.password);
      toast.success("Logged in successfully!");
      reset();
      router.push('/')
    } catch (error) {
      console.error(error);
      toast.error("Login failed!");
    } 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Log in now</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-500 ring-red-200" : "border-gray-300 focus:ring-blue-200"
              }`}
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.password ? "border-red-500 ring-red-200" : "border-gray-300 focus:ring-blue-200"
                }`}
              />
              <button
                type="button"
                className="absolute right-3 top-2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"

              className="w-full bg-[#002147]  text-white font-semibold py-2 px-4 rounded"
            >
              {isSubmitting ? " Submitting..." : "Log In"}
            </button>
          </div>
        </form>

        <h2 className=' capitalize text-base mt-2 text-end'> don't have an account ? plese <span className='font-semibold'> <Link href='/SignUp'>Sign Up</Link> </span> </h2>
                          <p className='text-lg capitalize my-4 text-center'>or</p>
                           <SocialLogIn></SocialLogIn>
      </div>
    </div>
  );
};

export default logInForm;
