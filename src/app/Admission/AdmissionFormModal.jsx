'use client'
import useAuth from '@/Hooks/useAuth';
import useAxisSecure from '@/Hooks/useAxisSecure';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AdmissionFormModal = ({ selectedCollege, setAdmission }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors,isSubmitting },
  } = useForm();

  const {user} = useAuth() // context api
  const axiosSecure = useAxisSecure();
  const router = useRouter()

  const onSubmit = async(data) => {
                const admissionData = {
                     name: data.name,
                     email : data.email,
                     subject : data.subject,
                     collegeId : selectedCollege._id,
                     collegeName : selectedCollege.name,
                     address : data.address,
                     phoneNumber : data.phone,
                     userImage : data.image,
                     admitedDate : new Date()

                }

                // send admission data
                try {
                        const res = await axiosSecure.post('/api/admission',admissionData);
                        const result = res.data;
                         if(result.acknowledged && result.insertedId){
                             toast.success('admission successfully');
                             reset();
                                    // redirect to my-college
                                        setTimeout(() => {
                                                    router.push('/MyCollege')
                                        }, 1000);

                         }
                        
                } catch (error) {
                    console.log(error);
                    
                }finally{
                    setAdmission(false); 

                }




  };

  if(!user?.email || !user?.displayName){
    return <p className="text-center py-20">Loading user data...</p>
}


  

  return (
    <div className=" common_padding py-10  inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full sm:w-[70%] lg:w-[55%] xl:w-[45%] relative shadow-lg">
        <button
          onClick={() => setAdmission(false)}
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
              defaultValue={user?.displayName}
            />
            {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Subject</label>
            <input
              {...register("subject", { required: true })}
              placeholder="Enter subject"
              className="input input-bordered w-full"
            />
            {errors.subject && <p className="text-red-500 text-sm">Subject is required</p>}
          </div>

            {/* email and phone number */}

            <div className="email_phone  md:grid grid-cols-2 gap-3">
                    <div>
            <label className="block mb-1 font-medium">Candidate Email</label>
            <input
              {...register("email", { required: true })}
              placeholder="Enter email"
              type="email"
              className="input input-bordered w-full"
              defaultValue={user?.email}
            />
            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              {...register("phone", { required: true })}
              placeholder="Enter phone number"
              type="tel"
              className="input input-bordered w-full"
            />
            {errors.phone && <p className="text-red-500 text-sm">Phone number is required</p>}
          </div>
            </div>

                        {/* address and date of birth */}

                        <div className="address_dateOfBirth  md:grid grid-cols-2 gap-3">
                               <div>
            <label className="block mb-1 font-medium">Address</label>
            <input
              {...register("address", { required: true })}
              placeholder="Enter address"
              className="input input-bordered w-full"
            />
            {errors.address && <p className="text-red-500 text-sm">Address is required</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Date of Birth</label>
            <input
              {...register("date_of_birth", { required: true })}
              type="date"
              className="input input-bordered w-full"
            />
            {errors.date_of_birth && <p className="text-red-500 text-sm">Date of birth is required</p>}
          </div>
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

export default AdmissionFormModal;
