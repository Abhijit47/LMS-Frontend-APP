import React, { useEffect, useState } from "react";
import { isExpired } from "react-jwt";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../features/actions/courseAction";
import { toast } from "react-toastify";
import CourseList from "../courseList/CourseList";
import { isNull } from "lodash";

const CoursesLists = () => {
  const [courses, setCourses] = useState([]);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const { courses: AllCourses } = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  // check token is verified or not
  useEffect(() => {
    // check if token is null
    if (isNull(token)) return navigate("/login", { replace: true });

    // check token is expired or not
    if (isExpired(token)) {
      toast.info("Session timed-out", {
        autoClose: 1250,
        position: "top-center",
      });
      navigate("/login", { replace: true });
    }
  }, [token, navigate]);

  // Fetch Courses Lists
  useEffect(() => {
    if (AllCourses?.length >= 0) {
      setCourses(AllCourses);
    } else {
      dispatch(
        getAllCourses({
          category: "all-courses",
          token,
          cb: (result) => {
            switch (result.status) {
              case 400:
                toast(result.data.message, { autoClose: 1250 });
                navigate("/", { replace: true });
                break;
              case 404:
                toast(result.statusText, { autoClose: 1250 });
                navigate("/", { replace: true });
                break;
              case 200:
                setCourses(result.data.data.courses);
                break;
              case 500:
                toast("Internal server error.", { autoClose: 1250 });
                navigate("/", { replace: true });
                break;
              default:
                toast("Something goes really wrong!!", { autoClose: 1250 });
                navigate("/", { replace: true });
                break;
            }
          },
        }),
      );
    }
  }, [dispatch, token, navigate, AllCourses]);

  return (
    <div className="container mx-auto px-5 pb-24">
      <div className="mb-24 flex w-full flex-wrap">
        <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
          <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
            All Courses
          </h1>
          <div className="rounded h-1 w-20 bg-blue-500"></div>
        </div>
      </div>
      <div className="-my-8 mb-24 grid grid-cols-1 gap-y-8">
        {courses?.map((course, index) => (
          <CourseList key={index} data={course} token={token} />
        ))}
      </div>
    </div>
  );
};

export default CoursesLists;
