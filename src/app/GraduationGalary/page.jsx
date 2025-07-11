"use client"
import React from 'react';
import Image from 'next/image';
// galary img
import img_1 from '../../../public/assets/galary/img-1.jpg'
import img_2 from '../../../public/assets/galary/img-2.jpg'
import img_3 from '../../../public/assets/galary/img-3.jpg'
import img_4 from '../../../public/assets/galary/img-4.jpg'
import img_5 from '../../../public/assets/galary/img-5.jpg'
import img_6 from '../../../public/assets/galary/img-6.jpg'
// import img_7 from '../../../public/assets/galary/im7'
// import img_8 from '../../../public/assets/galary/img-8.jpg'

 const galaryImgCollectoins = [
  { id: 1, img: img_1 },
  { id: 2, img: img_2 },
  { id: 3, img: img_3 },
  { id: 4, img: img_4 },
  { id: 5, img: img_5 },
  { id: 6, img: img_6 },
//   { id: 7, img: img_7 },
//   { id: 8, img: img_8 },
];



const GraduationGalary = () => {
    return (
        <div className='graduation_galary common_padding my-10'>
  <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize font-semibold mt-4 mb-8 text-center'>Frames of Friendship & Achievement</h1>

                            {/* galary image */}
                    <div className="gralary grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-1">
                          {
                            galaryImgCollectoins.map((data,index) => {
                                 return (
                                      <div key={index} className='w-full h-[300px] relative'>
                             <Image
                              fill
                              className='object-cover'
                              alt='image'
                             src={data.img} ></Image>
                            
                           </div>
                                 )
                            })
                          }
                    </div>


        </div>
    );
};

export default GraduationGalary;