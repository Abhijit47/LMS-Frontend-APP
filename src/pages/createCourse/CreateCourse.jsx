import React from "react";
import CourseCreationForm from "../../components/courseForm/CourseCreationForm";
import SectionMultiStepForm from "../../components/sectionForm/SectionMultiStepForm";

const CreateCourse = () => {
  return (
    <section className="divide-y-2 divide-blue-500">
      <CourseCreationForm />
      <SectionMultiStepForm />
    </section>
  );
};

export default CreateCourse;
