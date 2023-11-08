import React from "react";
import { testimonialData } from "../../constants";

const Testimonial = () => {
  return (
    <section className="min-w-screen min-h-screen bg-yellow-500">
      <div className="bg-gray-50 flex items-center justify-center">
        <div className="border-t border-b w-full border-gray-200 bg-white px-5 py-16 text-gray-800 md:py-24">
          <div className="mx-auto w-full max-w-6xl">
            {/* testimonial header */}
            <div className="mx-auto max-w-xl text-center">
              <h4 className="mb-5 font-bold text-gray-600 xs:text-2xl md:text-4xl lg:text-6xl">
                What people <br />
                are saying.
              </h4>
              <h5 className="mb-5 text-xl font-light">
                {" "}
                The function of education is to teach one and to teach all and
                think intensively and to think critically. Intelligence plus
                character - that is the goal of true education..
              </h5>
              <div className="mb-10 text-center">
                <span className="ml-1 inline-block h-1 w-1 rounded-full bg-indigo-500"></span>
                <span className="ml-1 inline-block h-1 w-3 rounded-full bg-indigo-500"></span>
                <span className="ml-1 inline-block h-1 w-40 rounded-full bg-indigo-500"></span>
                <span className="ml-1 inline-block h-1 w-3 rounded-full bg-indigo-500"></span>
                <span className="ml-1 inline-block h-1 w-1 rounded-full bg-indigo-500"></span>
              </div>
            </div>

            {/* testimonial cards */}
            <div className="xs:grid-col-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonialData.map((testimonial, index) => {
                return (
                  <div
                    key={index + 1}
                    className="transform-gpu cursor-pointer rounded-lg bg-gray-100 p-6 shadow-lg transition-all delay-100 duration-300 hover:-translate-y-2"
                  >
                    <div className="mb-4 flex w-full items-center">
                      <div className="bg-gray-50 border h-10 w-10 overflow-hidden rounded-full border-gray-200">
                        <img
                          src={testimonial.userImage}
                          alt={testimonial.userName}
                        />
                      </div>
                      <div className="flex-grow pl-3">
                        <h6 className="text-sm font-bold uppercase text-gray-600">
                          {testimonial.userName}
                        </h6>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="leading text-sm font-normal">
                        <span className="mr-1 text-lg font-bold italic leading-none text-gray-400">
                          "
                        </span>
                        {testimonial.userMessage}
                        <span className="ml-1 text-lg font-bold italic leading-none text-gray-400">
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* testimonial cards */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
