import React from "react";

const Loader = () => {
  return (
    <div className="flex">
      <div className="relative">
        {/* <!-- Outer Ring--> */}
        <div className="absolute h-12 w-12 rounded-full border-2 border-solid border-gray-200"></div>

        {/* <!-- Inner Ring --> */}
        <div className="absolute h-12 w-12 animate-spin rounded-full border-2 border-solid border-blue-500 border-t-transparent"></div>
      </div>
    </div>
  );
};

export default Loader;
