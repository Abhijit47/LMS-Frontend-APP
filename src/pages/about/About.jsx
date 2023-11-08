import React from "react";
import AboutUs from "../../components/aboutUs/AboutUs";
import Testimonial from "../../components/testimonial/Testimonial";

const About = () => {
  return (
    <>
      <AboutUs />
      <div className="mx-auto h-1 w-11/12 rounded-full bg-gray-500"></div>
      <Testimonial />
    </>
  );
};

export default About;
