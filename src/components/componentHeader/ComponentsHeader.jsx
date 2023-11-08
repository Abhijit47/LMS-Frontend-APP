import React from "react";

const ComponentsHeader = ({ headerName, description }) => {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
        {headerName}
      </h2>
      <p className="mt-2 text-lg leading-8 text-gray-700">{description}</p>
    </div>
  );
};

export default ComponentsHeader;
