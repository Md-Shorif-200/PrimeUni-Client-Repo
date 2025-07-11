"use client"
import useColleges from '@/Hooks/useColleges';
import React, { useState } from 'react';
import AdmissionFormModal from './AdmissionFormModal';
import Loading from '../loading';

const Admission = () => {
     const [colleges,refetch,isLoading] = useColleges();
     const [isAdmission,setAdmission] = useState(false);
     const [selectedCollege, setSelectedCollege] = useState(null);



     const handleAdmission = (college) => {
           setAdmission(true);
           setSelectedCollege(college)
     }

    //  loading state
    if(isLoading){
         return <Loading></Loading>
    }

    return (
            <div>
                 {
                     isAdmission ? 
                     
                     <>
                        <AdmissionFormModal selectedCollege={selectedCollege} setAdmission={setAdmission}></AdmissionFormModal>
                     </> :
                     
                     <>
                         <div className='admission_sectoin common_padding my-10'>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>College</th>
        <th>Ratings</th>
        <th> Total Research</th>
        <th> Admission Date</th>
        <th> </th>

      </tr>
    </thead>
    <tbody>
          {
            colleges.map((college,index) => {
                 return(
                       <tr key={index}>
        <th> {index +1 } </th>
                        <td> {college.name} </td>
                        <td> {college.rating} </td>
                        <td> {college.researchCount} </td>
                        <td> {college.admissionDate} </td>
                        <td>  <button className='secondary_btn btn-sm' onClick={() => handleAdmission(college)}> Admission </button> </td>
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

export default Admission;