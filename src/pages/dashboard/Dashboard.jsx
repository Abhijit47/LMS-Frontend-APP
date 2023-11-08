import React from "react";
import Hero from "../../components/hero/Hero";
import Cards from "../../components/cards/Cards";
import Features from "../../components/features/Features";
import Testimonial from "../../components/testimonial/Testimonial";
import CallToAction from "../../components/callToAction/CallToAction";
import FAQ from "../../components/faq/FAQ";
import NewsLetter from "../../components/newsLetter/NewsLetter";

const Dashboard = () => {
  return (
    <>
      <Hero />
      <Cards />
      <Features />
      <Testimonial />
      <CallToAction />
      <FAQ />
      <NewsLetter />
    </>
  );
};

export default Dashboard;
