import React from "react";

const OutputDetails = ({ outputDetails }) => {
  return (
    <div className="metrics-container mt-4 flex flex-col gap-y-2">
      <p className="p-2 text-sm">
        Status:{" "}
        <span className="rounded-md bg-gray-100 px-2 py-1 font-semibold">
          {outputDetails?.status?.description}
        </span>
      </p>
      <p className="p-2 text-sm">
        Memory:{" "}
        <span className="rounded-md bg-gray-100 px-2 py-1 font-semibold">
          {outputDetails?.memory}
        </span>
      </p>
      <p className="p-2 text-sm">
        Time:{" "}
        <span className="rounded-md bg-gray-100 px-2 py-1 font-semibold">
          {outputDetails?.time}
        </span>
      </p>
    </div>
  );
};

export default OutputDetails;
