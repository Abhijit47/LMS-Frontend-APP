import React from "react";

const CallToAction = () => {
  return (
    <>
      {/* <section className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80)] bg-cover bg-top bg-no-repeat">
        <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center ltr:sm:text-left rtl:sm:text-right">
            <h4 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              Latest Shirts
            </h4>

            <p className="hidden max-w-lg text-white/100 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore officia corporis quasi doloribus iure architecto quae
              voluptatum beatae excepturi dolores.
            </p>

            <div className="mt-4 sm:mt-8">
              <Link
                to="/login"
                className="transition inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Yours Today
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white py-16">
          <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
            <div className="justify-center gap-6 text-center md:flex md:text-left lg:items-center  lg:gap-16">
              <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
                <h4 className="text-4xl font-bold text-gray-700 md:text-5xl">
                  Buy now and benefit up to{" "}
                  <span className="text-blue-500">30% off</span>
                </h4>
                <p className="text-lg">
                  Be part of millions people around the world using tailus in
                  modern User Interfaces.
                </p>
                <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:justify-end md:gap-6">
                  <button
                    type="button"
                    title="Start buying"
                    className="rounded-xl transition sm:w-max w-full bg-gray-700 px-6 py-3 text-center shadow-xl hover:bg-gray-600 focus:bg-gray-600 active:bg-gray-700"
                  >
                    <span className="block font-semibold text-white">
                      Start buying
                    </span>
                  </button>
                  <button
                    type="button"
                    title="more about"
                    className="rounded-xl transition sm:w-max order-first w-full bg-gray-100 px-6 py-3 text-center hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-300"
                  >
                    <span className="block font-semibold text-gray-600">
                      More about
                    </span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
                <div className="col-span-2 row-span-4">
                  <img
                    src="https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/kushagra.webp"
                    className="rounded-full"
                    width="640"
                    height="960"
                    alt="shoes"
                    loading="lazy"
                  />
                </div>
                <div className="col-span-2 row-span-2">
                  <img
                    src="https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/iman.webp"
                    className="rounded-xl h-full w-full object-cover object-top"
                    width="640"
                    height="640"
                    alt="shoe"
                    loading="lazy"
                  />
                </div>
                <div className="col-span-3 row-span-3">
                  <img
                    src="https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/daniel.webp"
                    className="rounded-xl h-full w-full object-cover object-top"
                    width="640"
                    height="427"
                    alt="shoes"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* third */}
      <section className="relative bg-transparent">
        <div className="absolute top-0 -z-50 h-full w-full bg-[url(https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=720&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat opacity-25"></div>
        <div className="container mx-auto flex flex-wrap items-center px-5 py-24">
          <div className="pr-0 md:w-1/2 md:pr-16 lg:w-3/5 lg:pr-0">
            <h1 className="title-font text-3xl font-medium text-gray-900">
              Slow-carb next level shoindcgoitch ethical authentic, poko
              scenester
            </h1>
            <p className="mt-4 leading-relaxed">
              Poke slow-carb mixtape knausgaard, typewriter street art gentrify
              hammock starladder roathse. Craies vegan tousled etsy austin.
            </p>
          </div>
          <div className="mt-10 flex w-full flex-col rounded-lg bg-gray-300 p-8 shadow-lg md:ml-auto md:mt-0 md:w-1/2 lg:w-2/6">
            <h2 className="title-font mb-5 text-lg font-medium text-gray-900">
              Sign in
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                className="w-full rounded-md border-2 border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="text-sm leading-7 text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="off"
                className="w-full rounded-md border-2 border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <button className="rounded-md border-0 bg-indigo-500 px-8 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">
              Sign in
            </button>
            <p className="mt-3 text-xs text-gray-500">
              Literally you probably haven't heard of our courses.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
