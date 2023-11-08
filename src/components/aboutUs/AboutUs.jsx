import React from "react";
import AboutImage from "../../assets/images/view-smiling-3d-man-using-tablet.jpg";

const AboutUs = () => {
  return (
    <section id="about" className="text-gray-600">
      <div className="px-5 pb-20 pt-12">
        <div className="">
          {/* About image */}
          <div className="mx-auto h-64 w-full overflow-hidden rounded-lg lg:w-8/12">
            <img
              alt="content"
              className="h-full w-full object-cover object-center"
              src="https://img.freepik.com/free-photo/learn-learning-education-studying-concept_53876-120494.jpg?w=900&t=st=1688369033~exp=1688369633~hmac=e363f26a7750fb2ad3c466eeccffacf955cfefd745d9488164a7cf3656ed4f08"
            />
          </div>

          {/* About heading */}
          <div className="mt-8 flex flex-col items-center">
            <h3 className="title-font mt-4 text-lg font-medium text-gray-900">
              Intuitive Course Management
            </h3>
            <div className="rounded mb-4 mt-2 h-1 w-12 bg-blue-500"></div>
          </div>

          {/* About text */}
          <div className="mx-auto grid grid-cols-3 lg:w-11/12 xl:w-10/12">
            <div className="lg:p4 flex justify-center xs:col-span-3 xs:flex-row xs:items-center xs:gap-x-6 xs:p-2 lg:col-span-1 lg:flex-col lg:gap-y-6 xl:p-8">
              <p className="text-base">
                Our platform offers a user-friendly interface for managing and
                organizing your courses. You can easily navigate through your
                enrolled courses, track your progress, and access relevant
                materials and resources.
              </p>
              <div className="mx-auto hidden w-8/12 md:block">
                <img
                  className="aspect-square rounded-md"
                  src={AboutImage}
                  alt="view-smiling-3d-man-using-tablet"
                />
              </div>
            </div>
            <div className="xs:col-span-3 xs:p-2 md:p-4 lg:col-span-2 lg:p-8">
              <p className="text-justify text-lg leading-relaxed">
                Welcome to LMS Portal, a revolutionary learning management
                system designed to transform the way you acquire knowledge and
                enhance your educational journey. Whether you're a student, a
                professional, or an organization, Odyssey provides you with the
                tools and resources you need to excel in your learning
                endeavors. At Odyssey, we believe that education is a lifelong
                pursuit, and our platform is designed to empower learners of all
                ages and backgrounds. We understand that each learner is unique,
                with different goals, learning styles, and preferences. That's
                why we have built a flexible and inclusive platform that caters
                to individual needs and supports diverse learning methods. Our
                mission is to foster a vibrant online learning community where
                knowledge is accessible, interactive, and engaging. We are
                committed to providing a seamless and intuitive learning
                experience, making education accessible to anyone, anywhere, at
                any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
