'use client'
import useAuth from '@/Hooks/useAuth';
import useAxisSecure from '@/Hooks/useAxisSecure';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const ProfileEditModal = ({setModalOpen}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors,isSubmitting },
  } = useForm();

  const {user,updateUserProfile} = useAuth() // context api
  const axiosSecure = useAxisSecure();
  const [name,setName] = useState(user.displayName)



  const onSubmit = async(data) => {
              
    try {
            const res = await updateUserProfile(data.name,data.image)
                toast.success('you update this profile')
                reset()
            
    } catch (error) {
        console.log(error);
        
    }finally{
         setModalOpen(false)
    }



  };

  

  return (
    <div className=" common_padding py-10   fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full sm:w-[70%] lg:w-[55%] xl:w-[45%] relative shadow-lg">
        <button
          onClick={() => setModalOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">
          Admission Form
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          <div>
            <label className="block mb-1 font-medium">Candidate Name</label>
            <input
              {...register("name", { required: true })}
              placeholder="Enter candidate name"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
          </div>
       


          <div>
            <label className="block mb-1 font-medium">Photo</label>
            <input
              {...register("image", { required: true })}
              type="text"
              className="input input-bordered  w-full"
              placeholder='Enter Photo URL'
            />
            {errors.image && <p className="text-red-500 text-sm">Image is required</p>}
          </div>

          <button type="submit" className="btn btn-primary w-full">
            {
                isSubmitting ? 'submitting...' : 'Submit'
            }
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileEditModal;
