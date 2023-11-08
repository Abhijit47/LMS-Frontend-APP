import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isExpired } from "react-jwt";
import { isNull } from "lodash";

const Card = ({ data }) => {
  const [expired, setExpired] = useState(false);
  // Get the local storage
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (isNull(token)) return;
    if (isExpired(token)) {
      setExpired(true);
    }
  }, [token]);

  return (
    <Link
      to={expired ? "/" : `auth/course/${data._id}`}
      className="group relative block overflow-hidden rounded-md shadow-lg"
    >
      <div className="w-fit mx-auto h-64">
        <img
          className="transition h-full w-full object-scale-down duration-500 group-hover:scale-105 sm:h-64"
          src={
            data?.course_img
              ? data.course_img
              : "https://dummyimage.com/721x401"
          }
          alt={data.course_name}
        />
      </div>
      <div className="relative rounded-b-md bg-white p-6">
        <span className="whitespace-nowrap bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
          New
        </span>

        <h3 className="mt-4 text-lg font-medium text-gray-900">
          {data.course_name}
        </h3>

        <p className="mt-2 text-sm text-gray-700">{data.category}</p>
        <p className="mt-2 text-sm text-gray-700">{data.level}</p>
        <p className="mt-2 text-sm text-gray-700">{data.author}</p>

        <button className="transition mt-4 block w-full rounded-md bg-indigo-600 p-4 text-sm font-medium text-white hover:scale-105">
          View course
        </button>
      </div>
    </Link>
  );
};

export default Card;
