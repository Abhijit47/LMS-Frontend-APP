import React from "react";
import { Link } from "react-router-dom";

const GenericFormFooter = ({ linkText, linkTo, linkMessage }) => {
  return (
    <p className="mt-10 text-center text-sm text-gray-500">
      {linkText}
      <Link
        to={linkTo}
        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
      >
        {linkMessage}
      </Link>
    </p>
  );
};

export default GenericFormFooter;
