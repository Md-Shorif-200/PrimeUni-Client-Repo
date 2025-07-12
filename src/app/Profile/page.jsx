"use client";
import useAuth from "@/Hooks/useAuth";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import ProfileEditModal from "./ProfileEditModal";

const Profile = () => {
  const { user } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      {modalOpen ? (
        <>
          <ProfileEditModal setModalOpen={setModalOpen}></ProfileEditModal>
        </>
      ) : (
        <>
          <div className="w-full min-h-screen common_padding bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-10 max-w-3xl w-full relative">
              {/* Edit Button */}
              <div className="absolute top-4 right-4">
                <button className="flex items-center gap-1 text-sm px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition" onClick={() => setModalOpen(true)}>
                  <FaEdit className="text-base" />
                  Edit
                </button>
              </div>

              {/* Profile Info */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {/* Profile Image */}
                <div className="">
                  {user?.photoURL ? (
                    <>
                      <img alt="" src={user.photoURL}
                       className="w-20 h-20 rounded-full border"
                       />
                    </>
                  ) : (
                    <>
                      <div className="bg-neutral text-neutral-content w-20 h-20 rounded-full flex justify-center  items-center">
                        <span className="text-3xl">
                          {user.displayName
                            ? user?.displayName.slice(0, 1)
                            : ""}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* User Info */}
                <div className="text-center sm:text-left">
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    {user?.displayName}
                  </h2>
                  <p className="text-gray-600 mb-1">
                    <strong>Email:</strong> {user?.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
