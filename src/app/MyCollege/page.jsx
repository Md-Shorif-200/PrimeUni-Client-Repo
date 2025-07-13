'use client'
import useAdmission from '@/Hooks/useAdmission';
import useAuth from '@/Hooks/useAuth';
import React, { useState } from 'react';
import FeedbackModal from './FeedbackModal';

const MyCollege = () => {
     const [admissions,refetch,isLoading] = useAdmission();
     const {user} = useAuth();
     const myAdmission = admissions.filter(data => data?.email == user?.email);
     const [isFeedback,setIsFeedback] = useState(false)
     const [admissionData , setAdmissionData] = useState(null)


    // handleFeedback function
    
    const handleFeedback = (admission) => {
          setIsFeedback(true);
          setAdmissionData(admission)
          
    }
    return (
        <div className='w-full common_padding my-10'>
              {
                 isFeedback ?  
                 
                 <>
                 <FeedbackModal admissionData={admissionData} setIsFeedback={setIsFeedback}></FeedbackModal>
                 </> 
                 :
                  <>
                   <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize font-semibold mt-4 mb-8 text-center'>Our Featured College</h1>

            <div className="my_college_list">
                     <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th>Student</th>
        <th>College</th>
        <th>Subject</th>
        <th> Admited Date</th>
        <th> </th>
     

      </tr>
    </thead>
    <tbody>
          {
            myAdmission.map((admission,index) => {
                 return(
                       <tr key={index}>
        <th> {index +1 } </th>
                        <td>
                             <img src={admission.userImage} alt="img" className='w-8 h-8 rounded-full' />
                        </td>
                        <td> {admission.name} </td>
                        <td> {admission.collegeName} </td>
                        <td> {admission.subject} </td>
                        <td> {admission.admitedDate} </td>
                        <td>  <button className='secondary_btn btn-sm' onClick={() => handleFeedback(admission)}>  +Feedback </button> </td>
      </tr>
                 )
            })
          }          
    </tbody>
  </table>
</div>
            </div>
                  </>
              }

        </div>
    );
};

export default MyCollege;