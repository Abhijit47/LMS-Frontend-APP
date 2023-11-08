import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { COURSE_FORM_INITIAL_VALUE, selectOptions } from "../../constants";
import Button from "../button/Button";
import SwitchButton from "../button/SwitchButton";
import CourseFormBG from "./CourseFormBG";
import ComponentsHeader from "../../components/componentHeader/ComponentsHeader";
import { handleMessageLimit } from "../../features/handlerFactory";
import { createCourse } from "../../features/actions/courseAction";

const CourseCreationForm = () => {
  const [messageCharacterCount, setMessageCharacterCount] = useState(0);
  const [agreed, setAgreed] = useState(false);
  const [courseFormData, setCourseFormData] = useState(
    COURSE_FORM_INITIAL_VALUE,
  );
  const token = localStorage.getItem("token");

  const { course_name, course_details, author, course_img } = courseFormData;

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseFormData({ ...courseFormData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch an action to create course
    dispatch(
      createCourse({
        courseFormData,
        token,
        cb: (result) => {
          switch (result.status) {
            case 400:
              setCourseFormData(COURSE_FORM_INITIAL_VALUE);
              toast.info(result.data.message, {
                autoClose: 1250,
                position: "top-right",
                hideProgressBar: true,
              });
              break;
            case 401:
              setCourseFormData(COURSE_FORM_INITIAL_VALUE);
              toast.info(result.data.message, {
                autoClose: 1250,
                position: "top-right",
                hideProgressBar: false,
              });
              break;
            case 403:
              setCourseFormData(COURSE_FORM_INITIAL_VALUE);
              toast.info(result.data.message, {
                autoClose: 1250,
                position: "top-center",
                hideProgressBar: false,
              });
              break;
            case 404:
              setCourseFormData(COURSE_FORM_INITIAL_VALUE);
              toast.info("Not Found", {
                autoClose: 1250,
                position: "top-right",
                hideProgressBar: false,
              });
              break;
            case 201:
              setCourseFormData(COURSE_FORM_INITIAL_VALUE);
              // set the course id to state variable
              // setCourseId(result.data.data.newCourse._id);
              // course id set local storage
              localStorage.setItem("course_id", result.data.data.newCourse._id);
              toast.success(result.data.status, {
                autoClose: 1250,
                position: "top-center",
                hideProgressBar: true,
              });
              break;
            case 500:
              setCourseFormData(COURSE_FORM_INITIAL_VALUE);
              toast.error("Internal Server Error!!!", {
                autoClose: 1250,
                position: "top-right",
                hideProgressBar: false,
              });
              break;
            default:
              setCourseFormData(COURSE_FORM_INITIAL_VALUE);
              toast.error("Something goes really wrong.", {
                autoClose: 1250,
                position: "top-right",
                hideProgressBar: true,
              });
              break;
          }
        },
      }),
    );

    // Scroll to the element with the id "scroll-target"
    window.scrollTo({
      top: document.getElementById("section").offsetTop,
      behavior: "smooth", // for smooth scrolling (optional)
    });
  };

  return (
    <div className="isolate bg-white px-6 py-12">
      <CourseFormBG />
      <ComponentsHeader
        headerName="Create Course"
        description="Create a course for our e-learning platform."
      />
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="mx-auto mt-8 max-w-xl rounded-lg p-4 shadow-lg ring-1 ring-gray-500 sm:mt-10"
      >
        <div className="grid grid-cols-6 gap-x-6 gap-y-6">
          {/* Course name */}
          <div className="col-span-3">
            <label
              htmlFor={"course_name"}
              className="block text-sm font-semibold capitalize leading-6 text-gray-900"
            >
              course name
            </label>
            <div className="mt-2.5">
              <input
                type={"text"}
                name={"course_name"}
                id={"course_name"}
                required
                placeholder={"Enter a course name"}
                value={course_name}
                onChange={handleChange}
                autoComplete="off"
                className="form-input"
              />
            </div>
          </div>

          {/* Author name */}
          <div className="col-span-3">
            <label
              htmlFor={"author"}
              className="block text-sm font-semibold capitalize leading-6 text-gray-900"
            >
              author
            </label>
            <div className="mt-2.5">
              <input
                type={"text"}
                name={"author"}
                id={"author"}
                required
                placeholder={"Enter a author name"}
                value={author}
                onChange={handleChange}
                autoComplete="off"
                className="form-input"
              />
            </div>
          </div>

          {/*Course Level */}
          <div className="col-span-3">
            <label
              htmlFor={"level"}
              className="block text-sm font-semibold capitalize leading-6 text-gray-900"
            >
              Level
            </label>
            <div className="mt-2.5">
              <select
                name="level"
                id="level"
                className="form-input"
                onChange={handleChange}
                required
              >
                <option value={""}>Choose a course level</option>
                <option value={"Begineer"}>Beginner</option>
                <option value={"Intermediate"}>Intermediate</option>
                <option value={"Advance"}>Advance</option>
              </select>
            </div>
          </div>

          {/* Course category */}
          <div className="col-span-3">
            <label
              htmlFor={"category"}
              className="block text-sm font-semibold capitalize leading-6 text-gray-900"
            >
              Category
            </label>
            <div className="mt-2.5">
              <select
                name="category"
                id="category"
                className="form-input"
                onChange={handleChange}
                required
              >
                <option value={""}>Choose a course Category</option>
                {selectOptions.map((_, index) => (
                  <option value={_.option} key={index}>
                    {_.optionValue}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Course image url */}
          <div className="col-span-6">
            <label
              htmlFor={"course_img"}
              className="block text-sm font-semibold capitalize leading-6 text-gray-900"
            >
              course image url
            </label>
            <div className="mt-2.5">
              <input
                type={"url"}
                name={"course_img"}
                id={"course_img"}
                pattern="https?://.+"
                required
                placeholder={"Enter a valid image url"}
                value={course_img}
                onChange={handleChange}
                autoComplete="off"
                className="form-input"
              />
            </div>
          </div>

          {/* Course description */}
          <div className="col-span-6">
            <label
              htmlFor="course_details"
              className="block text-sm font-semibold capitalize leading-6 text-gray-900"
            >
              Course details
            </label>
            <div className="mt-2.5">
              <textarea
                id={"course_details"}
                name={"course_details"}
                rows="4"
                required
                minLength={20}
                maxLength={250}
                className="form-input"
                placeholder={"Enter course description"}
                value={course_details}
                onChange={handleChange}
                onKeyUp={(ev) =>
                  handleMessageLimit(
                    ev,
                    setMessageCharacterCount,
                    ".message-warning",
                  )
                }
              ></textarea>
              <span className="message-warning float-left hidden text-xs text-red-700">
                Limit upto 250 charcters only
              </span>
              {messageCharacterCount === 0 ? (
                <span className="float-right text-xs font-semibold leading-6 text-gray-900 opacity-0">
                  {messageCharacterCount}
                </span>
              ) : (
                <span className="float-right text-xs font-semibold leading-6 text-gray-900">
                  {messageCharacterCount}
                </span>
              )}
            </div>
          </div>

          {/* Switch Button */}
          <div className="col-span-6">
            <SwitchButton agreed={agreed} setAgreed={setAgreed} />
          </div>
        </div>

        {/* Create Course Button */}
        <div className="mt-6">
          <Button buttonName={"create course"} agreed={agreed} />
        </div>
      </form>
    </div>
  );
};

export default CourseCreationForm;
