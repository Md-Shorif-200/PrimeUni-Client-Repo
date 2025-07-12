"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import useAxiosPublic from "@/Hooks/useAxiosPublic";
import Ratings from "@/Components/Ratings";

export default function StudentsFeedbacks() {
  const [feedback, setFeedback] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    async function fetchFeedback() {
      try {
        const res = await axiosPublic.get("/api/feedback");
        setFeedback(res.data);
      } catch (err) {
        console.error("Failed to fetch feedback", err);
      }
    }
    fetchFeedback();
  }, []);

  return (
    <div className="w-full students_review section common_padding my-10 ">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 mb-8 text-center capitalize">
        Students Review
      </h1>

        <div className="feedback_slide w-full h-[350px] bg-gray-100 py-8">
                {feedback.length > 0 ? (
        <Swiper
          slidesPerView={1}
          navigation={true}
          keyboard={{ enabled: true }}
          modules={[Navigation, Keyboard]}
          spaceBetween={30}
          Infinity={true}
          className="w-[85%] sm:w-1/2 h-full"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
        >
          {feedback.map((item) => (
            <SwiperSlide key={item._id} className="w-full  flex justify-center ">
              <div className=" p-6 rounded-xl shadow-md bg-white hover:shadow-xl transition duration-300 h-full flex justify-center items-center ">
                <div>
                      <div>
                        <div className="  flex  items-center gap-3">
                  <img
                    src={item.profileImg || "https://i.ibb.co/2FsfXqM/default-user.png"}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border"
                  />
                    <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
      
                </div>
                      </div>

                       <div className="cnt">
                                                {/* college name */}
                                     <p className="text-base  sm:text-lg my-2 font-semibold">{item.college}</p>
                                                    {/* ratings */}
                                                        <Ratings value={item.rating}></Ratings>

                                            {/* description */}
                <p className="text-base my-2 text-gray-800 leading-relaxed capitalize">
                  {item.description.length > 200
                    ? item.description.slice(0, 200) + "..."
                    : item.description}
                </p>
                            </div>
                </div>

                           
                 
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center text-gray-500">No feedback available.</p>
      )}
        </div>
    </div>
  );
}
