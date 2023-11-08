import React from "react";
import { NotFoundIcon } from "../../assets/svgs/icons";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      {/*
    Graphic from https://www.opendoodles.com/
*/}

      <div className="grid h-screen place-content-center bg-white px-4">
        <div className="flex flex-col gap-6 text-center">
          <NotFoundIcon />

          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </h1>

          <p className="text-gray-500">We can't find that page.</p>

          <Link
            to={"/"}
            className="self-center rounded-md bg-gradient-to-tr from-pink-500 to-orange-500 px-3 py-1 text-white"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
