import React, { Fragment } from "react";

const Button = ({ buttonName, agreed }) => {
  return (
    <Fragment>
      {!agreed ? (
        <div className="grid place-content-center">
          <button
            type="button"
            disabled
            className="block w-full rounded-md bg-indigo-400 px-3 py-2 text-center text-sm font-semibold capitalize text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {buttonName}
          </button>
        </div>
      ) : (
        <div className="grid place-content-center">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold capitalize text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {buttonName}
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default Button;
