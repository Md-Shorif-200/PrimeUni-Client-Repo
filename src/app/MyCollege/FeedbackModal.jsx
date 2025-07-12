'use client'
import useAuth from '@/Hooks/useAuth';
import useAxisSecure from '@/Hooks/useAxisSecure';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const FeedbackModal = ({ setIsFeedback, admissionData }) => {
  const { register, handleSubmit, reset } = useForm();
  const {user} = useAuth();
  const [rating, setRating] = useState(0);
  const axiosSecure = useAxisSecure()

  const onSubmit = async(data) => {
    const feedbackData = {
      name : user.displayName,
      email  : user.email,
      college: admissionData.collegeName,
      collegeId : admissionData.collegeId,
      rating: rating,
      description: data.description,
      date: new Date(),
    };

    //   send feedback data to database
      try {
                const response = await axiosSecure.post('/api/feedback',feedbackData);
                const result = response.data;
                if(result.acknowledged && result.insertedId){

                    setTimeout(() => {
                         toast.success('Thanks for your feedback!');
                    }, 200);

                    reset();
                      
                }
      } catch (error) {
                console.log(error);
                
      }finally{
          setRating(0);
          setIsFeedback(false);

      }

  
  };

  return (
    <dialog open className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">Give Your Feedback</h3>
          <button
            onClick={() => setIsFeedback(false)}
            className="btn btn-sm btn-circle btn-ghost text-xl"
          >
            ✕
          </button>
        </div>

        {/* Rating */}
        <div className="flex justify-center mb-4">
          <div className="rating">
            {[1, 2, 3, 4, 5].map((num) => (
              <input
                key={num}
                type="radio"
                name="rating"
                className="mask mask-star bg-orange-400"
                onChange={() => setRating(num)}
                checked={rating === num}
              />
            ))}
          </div>
        </div>

        {/* Description Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="label">
              <span className="text-xl font-semibold my-3">Description</span>
            </label>
            <textarea
              {...register('description', { required: true })}
              className="textarea textarea-bordered w-full"
              rows={4}
              placeholder="Write your feedback..."
            ></textarea>
          </div>

          <div className="modal-action">
            <button type="submit" className="btn btn-primary w-full">
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default FeedbackModal;
