import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";

const LazyImage = React.lazy(() => import("./HeroImage"));

const Hero = () => {
  return (
    <section id="hero" className="">
      <div className="container mx-auto pb-2 pt-2 lg:pb-16 lg:pt-16">
        <div className="mt-4 grid items-center gap-x-4 gap-y-4 xs:gap-y-6 md:grid-cols-1 md:gap-y-8 lg:grid-cols-2">
          <div className="md:p-14 p-4 xs:p-6">
            <h1 className="mb-4 text-xl font-medium text-gray-800 xs:text-3xl  xs:font-semibold md:text-4xl lg:text-5xl lg:font-bold xl:text-6xl">
              Master Skills &
              <br className="inline-block" />
              Learn from Experts
            </h1>
            <p className="mb-8 leading-relaxed text-gray-700">
              Our Online Learning Platform offers expert-led courses to master
              new skills. Join us now to achieve your goals through interactive
              methods, 24/7 access and community support.
            </p>
            <div className="flex justify-start gap-6">
              <Link
                to={"/courses"}
                className="rounded-md border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none"
              >
                Explore Courses
              </Link>

              <Link
                to="/login"
                className="rounded-md border-0 bg-gray-100/50 px-6 py-2 text-lg text-gray-700 hover:bg-gray-200 focus:outline-none"
              >
                Login
              </Link>
            </div>
          </div>
          <div className="sm:6/12 mx-auto md:w-8/12 lg:w-11/12">
            <Suspense
              fallback={
                <div className="flex h-64 items-center justify-center">
                  <Loader />
                </div>
              }
            >
              <LazyImage />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
