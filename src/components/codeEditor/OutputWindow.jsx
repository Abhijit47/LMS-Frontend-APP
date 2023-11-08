import React from "react";

const OutputWindow = ({ outputDetails }) => {
  const getOutput = () => {
    let statusId = outputDetails?.status?.id;

    if (statusId === 6) {
      // compilation error
      return (
        <pre className="px-2 py-1 text-xs font-normal text-red-500">
          {atob(outputDetails?.compile_output)}
        </pre>
      );
    } else if (statusId === 3) {
      return (
        <pre className="px-2 py-1 text-xs font-normal text-green-500">
          {atob(outputDetails.stdout) !== null
            ? `${atob(outputDetails.stdout)}`
            : null}
        </pre>
      );
    } else if (statusId === 5) {
      return (
        <pre className="px-2 py-1 text-xs font-normal text-red-500">
          {`Time Limit Exceeded`}
        </pre>
      );
    } else {
      return (
        <pre className="px-2 py-1 text-xs font-normal text-red-500">
          {atob(outputDetails?.stderr)}
        </pre>
      );
    }
  };
  return (
    <div className="xs:w-full md:w-5/12 lg:w-6/12 xl:w-full">
      <h5 className="mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-xl font-bold text-transparent">
        Output
      </h5>
      <div className="h-56 w-full overflow-y-auto rounded-md bg-[#1e293b] text-sm font-normal text-white">
        {outputDetails ? <>{getOutput()}</> : null}
      </div>
    </div>
  );
};

export default OutputWindow;
