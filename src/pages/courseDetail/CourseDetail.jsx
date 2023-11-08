import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import isNull from "lodash/isNull";
import { isExpired } from "react-jwt";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Accordion from "../../components/accordion/Accordion";
import QuizOptions from "../../components/button/QuizOptions";
import Loader from "../../components/loader/Loader";
import { getOneCourse } from "../../features/actions/courseAction";

const CourseDetail = () => {
  //State variable
  const [course, setCourse] = useState({});

  //Get the id from url parameter
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading } = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  // Get the local storage
  const token = localStorage.getItem("token");

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
    } else {
      dispatch(
        getOneCourse({
          id,
          token,
          cb: (result) => {
            switch (result.status) {
              case 400:
                navigate("/", { replace: true });
                toast.info(result.data.message, {
                  autoClose: 1250,
                  position: "top-center",
                  className: "text-sm",
                });
                break;
              case 404:
                navigate("/", { replace: true });
                toast.info(result.data.message, {
                  autoClose: 1250,
                  position: "top-center",
                  className: "text-sm",
                });
                break;
              case 200:
                setCourse(result.data.data.course);
                break;
              case 500:
                navigate("/", { replace: true });
                toast.error("Internal server error.", {
                  autoClose: 1250,
                  position: "top-center",
                  className: "text-sm",
                });
                break;

              default:
                navigate("/", { replace: true });
                toast.error("Something goes really wrong!!.", {
                  autoClose: 1250,
                  position: "top-center",
                  className: "text-sm",
                });
                break;
            }
          },
        }),
      );
    }
    // check token
  }, [dispatch, id, navigate, token]);

  //alert msg handleAlert
  const handleAlert = () => {
    toast.info("You have Sucessfully enrolled for this course....", {
      autoClose: 850,
      position: "top-right",
    });
  };

  return (
    <Fragment>
      {isLoading && (
        <div className="flex min-h-screen items-center justify-center">
          <Loader />
        </div>
      )}
      {!isLoading && (
        <section className="">
          <div className="relative z-[300] bg-gray-900 bg-[url(https://images.unsplash.com/photo-1584697964358-3e14ca57658b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat">
            <div className="absolute -z-[100] h-full w-full bg-white/25 opacity-75"></div>
            <div className="container mx-auto flex flex-wrap items-center px-5 py-16">
              <div className="pr-0 md:w-1/2 md:pr-16 lg:w-3/5 lg:pr-0">
                <h1 className="text-3xl font-semibold text-gray-100">
                  {course.course_name}
                </h1>
                <p className="mt-4 text-xl font-medium leading-relaxed text-gray-100">
                  {course.course_details}
                </p>
              </div>
              <div className="w-fit mt-10 flex flex-col rounded-lg bg-gray-100 p-8 md:ml-auto md:mt-0 md:w-1/2 lg:w-3/12">
                <button
                  onClick={handleAlert}
                  className="flex-shrink-0 rounded-lg border-0 bg-blue-500 px-8 py-2 text-lg text-white hover:bg-blue-600 focus:outline-none"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
          <div className="container mx-auto flex flex-col items-center px-5 py-8">
            <h2 className="pb-4 text-3xl font-semibold text-gray-800">
              Syllabus
            </h2>

            {course.section?.map((section, index) => (
              <Fragment key={index}>
                <h3 className="text-3xl font-medium text-gray-800">
                  {section?.section_name}
                </h3>
                <p className="text-xl font-normal text-gray-700">
                  {section?.section_description}
                </p>
              </Fragment>
            ))}
            {course?.section && <Accordion items={course.section} />}
          </div>
          {/* <div className="container mx-auto flex flex-col items-center px-5 py-8">
        <h2 className="title-font pb-8 text-3xl font-medium">Videos</h2>
      </div> */}
          <div className="container mx-auto mb-20 flex flex-col items-center gap-y-4 px-5 py-8">
            <h2 className="text-3xl font-medium">Quiz</h2>
            <h4 className="text-center text-xl text-gray-700">
              CSS Multiple Choice Questions
            </h4>
            {course.section?.map((quizes, index) => (
              <Fragment key={index}>
                <QuizOptions quizes={quizes} />
              </Fragment>
            ))}
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default CourseDetail;
