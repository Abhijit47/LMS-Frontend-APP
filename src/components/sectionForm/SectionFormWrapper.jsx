import React, { PureComponent } from "react";

const SectionFormWrapper = ({ title = "", children = PureComponent }) => {
  return (
    <>
      <h2 className="form-heading relative text-center text-2xl font-semibold text-gray-800 underline">
        {title}
      </h2>
      <div className="form-children grid grid-cols-2 gap-y-4">{children}</div>
    </>
  );
};

export default SectionFormWrapper;
