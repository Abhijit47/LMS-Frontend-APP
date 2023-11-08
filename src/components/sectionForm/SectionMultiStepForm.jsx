import React, { useState } from "react";
import isMongoId from "validator/es/lib/isMongoId";
import isEmpty from "lodash/isEmpty";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addSectionToCourse } from "../../features/actions/courseAction";
import { SECTION_FORM_INITIAL_VALUE } from "../../constants";
import useMultiStepForm from "../../hooks/useMultiStepForm";
import SectionForm from "./SectionForm";
import VideoForm from "./VideoForm";
import QuizForm from "./QuizForm";
import ComponentsHeader from "../componentHeader/ComponentsHeader";

const SectionMultiStepForm = () => {
  const [agreed, setAgreed] = useState(false);
  const [sectionFormData, setSectionFormData] = useState(
    SECTION_FORM_INITIAL_VALUE,
  );

  const [quizQuestions, setQuizQuestions] = useState([""]);
  const [quizOptions, setQuizOptions] = useState([""]);

  const token = localStorage.getItem("token");
  const courseId = localStorage.getItem("course_id");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // Function to handle change partial form-fields
  function updateFields(fields) {
    setSectionFormData((prev) => {
      return { ...prev, ...fields };
    });
  }

  // Function to handle input changes
  function handleQuizQuestion(event, index) {
    const updatedQuestions = [...quizQuestions]; // Create a copy of the array
    updatedQuestions[index] = event.target.value; // Update the specific element
    setQuizQuestions(updatedQuestions); // Update the state
  }

  // use multistep form custom hook
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, prev, next } =
    useMultiStepForm([
      <SectionForm
        {...sectionFormData}
        courseId={courseId}
        updateFields={updateFields}
      />,
      <VideoForm {...sectionFormData} updateFields={updateFields} />,
      <QuizForm
        {...sectionFormData}
        updateFields={updateFields}
        quizQuestions={quizQuestions}
        handleQuizQuestion={handleQuizQuestion}
        quizOptions={quizOptions}
        setQuizOptions={setQuizOptions}
        agreed={agreed}
        setAgreed={setAgreed}
      />,
    ]);

  // Function to handle form submit
  const handleSubmit = (e) => {
    // Block default form behaviour
    e.preventDefault();

    // Check if not last step then call next() function
    if (!isLastStep) return next();

    // Check if mongoId is valid or not
    if (!isMongoId(courseId) || isEmpty(courseId)) {
      return toast.info("There is no course id to update section", {
        autoClose: 1550,
        position: "bottom-right",
        className: "text-xs text-red-500",
      });
    }

    // Collection data from form-inputs
    // Create a embed video url
    let video_url = `https://www.youtube.com/embed/${sectionFormData.video_url}`;

    // Create a form data object
    const formData = {
      id: courseId,
      ...sectionFormData,
      video_url,
      quiz_questions: [...quizQuestions],
      quiz_options: [...quizOptions],
    };

    // check agreement
    if (!agreed) {
      // Scroll to the element with the id "scroll-target"
      return window.scrollTo({
        top: document.getElementById("switch").offsetTop,
        behavior: "smooth", // for smooth scrolling (optional)
      });
    }

    // make an axios call to send formData
    dispatch(
      addSectionToCourse({
        formData,
        token,
        cb: (result) => {
          switch (result.status) {
            case 400:
              // reset the section forms at initial state
              setSectionFormData(SECTION_FORM_INITIAL_VALUE);
              setQuizQuestions([""]);
              setQuizOptions([""]);
              toast.info(result.data.message, {
                autoClose: 1250,
                position: "top-center",
                className: "text-xs",
              });
              navigate("/", { replace: true });
              break;
            case 401:
              // reset the section forms at initial state
              setSectionFormData(SECTION_FORM_INITIAL_VALUE);
              setQuizQuestions([""]);
              setQuizOptions([""]);
              toast.info(result.data.message, {
                autoClose: 1250,
                position: "top-center",
                className: "text-xs",
              });
              navigate("/", { replace: true });
              break;
            case 403:
              // reset the section forms at initial state
              setSectionFormData(SECTION_FORM_INITIAL_VALUE);
              setQuizQuestions([""]);
              setQuizOptions([""]);
              toast.info(result.data.message, {
                autoClose: 1250,
                position: "top-center",
                className: "text-xs",
              });
              navigate("/", { replace: true });
              break;
            case 404:
              // reset the section forms at initial state
              setSectionFormData(SECTION_FORM_INITIAL_VALUE);
              setQuizQuestions([""]);
              setQuizOptions([""]);
              navigate("/");
              toast.info("Not Found!", {
                autoClose: 1250,
                position: "top-center",
                className: "text-xs",
              });
              navigate("/", { replace: true });
              break;
            case 201:
              // remove the course id from local storage
              localStorage.removeItem("course_id");
              // reset the section forms at initial state
              setSectionFormData(SECTION_FORM_INITIAL_VALUE);
              setQuizQuestions([""]);
              setQuizOptions([""]);
              toast.success(result.data.status, {
                autoClose: 1250,
                position: "top-center",
                className: "text-xs",
              });
              navigate("/", { replace: true });
              break;
            case 500:
              // reset the section forms at initial state
              setSectionFormData(SECTION_FORM_INITIAL_VALUE);
              setQuizQuestions([""]);
              setQuizOptions([""]);
              toast.error("Internal server error!!!", {
                autoClose: 1250,
                position: "top-center",
                className: "text-xs",
              });
              navigate("/", { replace: true });
              break;
            default:
              // reset the section forms at initial state
              setSectionFormData(SECTION_FORM_INITIAL_VALUE);
              setQuizQuestions([""]);
              setQuizOptions([""]);
              toast.error("Something goes really wrong!!!", {
                autoClose: 1250,
                position: "top-center",
                className: "text-xs",
              });
              navigate("/", { replace: true });
              break;
          }
        },
      }),
    );
  };

  return (
    <div className="isolate bg-white px-6 pb-20 pt-10" id="section">
      <ComponentsHeader
        headerName="Add section"
        description="Update section to particular course for our e-learning platform."
      />
      <form
        className="relative mx-auto mt-8 max-w-xl rounded-lg p-4 shadow-lg ring-1 ring-gray-500 sm:mt-10"
        onSubmit={handleSubmit}
      >
        {/* step count */}
        <div className="absolute right-[0.5rem] top-[0.5rem] underline">
          <span className="text-sm text-gray-800">{currentStepIndex + 1}</span>/
          <span
            className={`${
              isLastStep ? "text-red-600" : "text-gray-800"
            } text-sm`}
          >
            {steps.length}
          </span>
        </div>

        {/* Multiple forms start */}
        {step}
        {/* Multiple forms end */}

        <div className="flex justify-end gap-x-3">
          <div>
            {!isFirstStep && (
              <button type="button" className="form-btn" onClick={prev}>
                Prev
              </button>
            )}
          </div>
          <div>
            <button className="form-btn" type="submit">
              {isLastStep ? "Submit" : "Next"}
            </button>
            {/* {!isLastStep && (
              <button className="form-btn" type="submit" onClick={next}>
                Next
              </button>
            )} */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SectionMultiStepForm;
