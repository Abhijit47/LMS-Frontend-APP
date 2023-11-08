import React, { useState } from "react";
import SectionFormInput from "./SectionFormInput";
import Button from "../button/Button";
import SwitchButton from "../button/SwitchButton";
import ComponentsHeader from "../../components/componentHeader/ComponentsHeader";

const SectionCreationForm = ({ courseId }) => {
  const [agreed, setAgreed] = useState(false);
  const [sectionFormData, setSectionFormData] = useState({
    section_id: courseId || "650aa3461af69630932ed764",
    section_name: "",
    section_description: "",
    video_title: "",
    video_url: "",
    quiz_title: "",
    quiz_answer: "",
  });

  const {
    section_id,
    section_name,
    section_description,
    video_title,
    quiz_title,
    quiz_answer,
  } = sectionFormData;

  // const [quizQuestions, setQuizQuestions] = useState([""]);
  const [quizQuestion, setQuizQuestion] = useState([""]);
  const [quizOptions, setQuizOptions] = useState([""]);

  // handle form submit
  const handleSubmit = (e) => {
    // Block default form behaviour
    e.preventDefault();

    let video_url = `https://www.youtube.com/embed/${sectionFormData.video_url}`;
    const formData = {
      section_id,
      section_name,
      section_description,
      video_title,
      video_url,
      quiz_title,
      quiz_answer,
      quizQuestion,
      quizOptions,
    };

    console.log(formData);

    // make an axios call to send formData

    // remove the course id from local storage

    // reset the section form at initial state
  };

  const sectionFormInput = [
    {
      labelName: "section name",
      labelFor: "section_name",
      type: "text",
      name: "section_name",
      id: "section_name",
      value: sectionFormData.section_name,
      autocomplete: "off",
      placeholder: "Enter Section Name",
    },
    {
      labelName: "section description",
      labelFor: "section_description",
      name: "section_description",
      id: "section_description",
      value: sectionFormData.section_description,
      autocomplete: "off",
      placeholder: "Enter Section Description",
    },
    {
      labelName: "video title",
      labelFor: "video_title",
      type: "text",
      name: "video_title",
      id: "video_title",
      value: sectionFormData.video_title,
      autocomplete: "off",
      placeholder: "Enter Video Title",
    },
    {
      labelName: "video url",
      labelFor: "video_url",
      type: "text",
      name: "video_url",
      id: "video_url",
      value: sectionFormData.video_url,
      autocomplete: "off",
      placeholder: "Ex : gVqATbb826U",
    },
    {
      labelName: "quiz title",
      labelFor: "quiz_title",
      type: "text",
      name: "quiz_title",
      id: "quiz_title",
      value: sectionFormData.quiz_title,
      autocomplete: "off",
      placeholder: "Enter Quiz Title",
    },
  ];

  return (
    <section className="relative">
      <div className="isolate bg-white px-6 py-12">
        <ComponentsHeader
          headerName="Add section"
          description="Update section to particular course for our e-learning platform."
        />

        <form
          onSubmit={handleSubmit}
          method="POST"
          className="mx-auto mt-4 max-w-xl rounded-lg p-4 shadow-lg ring-1 ring-gray-500"
        >
          <div className="grid grid-cols-2 gap-y-6">
            <SectionFormInput
              sectionFormInput={sectionFormInput}
              courseId={courseId}
              sectionFormData={sectionFormData}
              setSectionFormData={setSectionFormData}
              quizQuestion={quizQuestion}
              setQuizQuestion={setQuizQuestion}
              quizOptions={quizOptions}
              setQuizOptions={setQuizOptions}
            />

            {/* Switch Button */}
            <div className="col-span-2">
              <SwitchButton agreed={agreed} setAgreed={setAgreed} />
            </div>
          </div>

          {/* Add section button */}
          <div className="mt-6">
            <Button buttonName={"add section"} agreed={agreed} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default SectionCreationForm;
