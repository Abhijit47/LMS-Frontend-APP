import React from "react";
import { Link, useLocation } from "react-router-dom";
import { isNull } from "lodash";
import { dayMonthFormat, yearFormat } from "../../utils/dateTimeFormatter";

const CourseList = ({ data, token }) => {
  let location = useLocation();
  let { pathname } = location;

  return (
    <article className="transition flex rounded-md bg-white hover:shadow-xl">
      <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time
          dateTime={new Date(data?.createdAt ? data.createdAt : Date.now())}
          className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
        >
          <span>{data.createdAt ? yearFormat(data.createdAt) : null}</span>
          <span className="w-px flex-1 bg-gray-900/25"></span>
          <span>{data.createdAt ? dayMonthFormat(data.createdAt) : null}</span>
        </time>
      </div>

      <div className="hidden sm:block sm:basis-56">
        <img
          alt={data.course_name}
          src={data.course_img}
          className="aspect-square h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <Link
            to={
              !isNull(token)
                ? `${pathname.replace(
                    "/auth/courses",
                    `/auth/course/${data._id}`,
                  )}`
                : null
            }
          >
            <h3 className="font-bold uppercase text-gray-900">
              {data.course_name}
            </h3>
          </Link>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
            {data.course_details}
          </p>
        </div>

        <div className="sm:flex sm:items-end sm:justify-end">
          <Link
            to={
              !isNull(token)
                ? `${pathname.replace(
                    "/auth/courses",
                    `/auth/course/${data._id}`,
                  )}`
                : null
            }
            className="transition block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 hover:bg-yellow-400"
          >
            know more
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CourseList;
