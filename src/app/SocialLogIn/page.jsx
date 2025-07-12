"use client"
import React from "react";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import useAuth from "@/Hooks/useAuth";
import { useRouter } from "next/navigation";


const SocialLogIn = () => {
  const { googleLogIn } = useAuth();
  const router = useRouter()


  const handleGoogleLogIn = async () => {
    try {
      const result = await googleLogIn(); 
      toast.success("log In successfully")
      router.push('/')
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <button
      className="w-full bg-white text-black border border-gray-400 py-2 px-4 rounded-md flex justify-center items-center gap-x-4 font-semibold cursor-pointer"
      onClick={handleGoogleLogIn}
    >
      <FaGoogle className="primary_text_color"></FaGoogle> Log In With Google
    </button>
  );
};

export default SocialLogIn;
