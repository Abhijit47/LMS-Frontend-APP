import React from "react";
//https://img.freepik.com/free-photo/hand-pressing-envelope-that-is-sent-world_1232-278.jpg?w=740&t=st=1698325483~exp=1698326083~hmac=91215a8b40cd3339a613e7fda927ab24d9324dc35840b8341df6c1a801ba68bd

// https://source.unsplash.com/random/640x480
const NewsLetter = () => {
  return (
    <section className="relative my-10">
      <div className="absolute -z-10 h-64 w-full bg-[url(https://img.freepik.com/free-photo/hand-pressing-envelope-that-is-sent-world_1232-278.jpg?w=740&t=st=1698325483~exp=1698326083~hmac=91215a8b40cd3339a613e7fda927ab24d9324dc35840b8341df6c1a801ba68bd)] bg-cover bg-center bg-no-repeat opacity-25 bg-blend-multiply"></div>
      <div className="container mx-auto flex flex-col flex-wrap content-center justify-center p-4 py-20 md:p-10">
        <h1 className="leadi text-center text-5xl font-semibold antialiased">
          Get Our Updates
        </h1>
        <p className="pb-8 pt-2 text-center text-xl antialiased">
          Find out about events and other news
        </p>
        <form className="flex flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="newsletter-email"
            id="newsletter-email"
            autoComplete="email"
            placeholder="example@email.com"
            className="w-3/5 rounded-l-lg p-3 sm:w-2/3"
          />
          <button
            type="button"
            className="w-2/5 rounded-r-lg bg-indigo-500 p-3 font-semibold text-gray-800 sm:w-1/3"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
