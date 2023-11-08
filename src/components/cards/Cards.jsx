import React from "react";
// eslint-disable-next-line
import Card from "../card/Card";
import CardCarousel from "../cardCarousel/CardCarousel";

const Cards = ({ data }) => {
  return (
    <section className="text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 flex w-full flex-wrap">
          <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
            <h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
              All courses
            </h1>
            <div className="h-1 w-20 rounded-md bg-blue-500"></div>
          </div>
        </div>
        <div className="-m-4 flex flex-wrap">
          <CardCarousel />
        </div>
      </div>
    </section>
  );
};

export default Cards;
