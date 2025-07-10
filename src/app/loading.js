// app/loading.js
import React from 'react';

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
