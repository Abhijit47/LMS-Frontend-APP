import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBar = () => {
  return (
    <div className="">
      <label htmlFor="mobile-search-candidate" className="sr-only">
        Search
      </label>
      <label htmlFor="desktop-search-candidate" className="sr-only">
        Search
      </label>
      <div className="flex rounded-md shadow-sm">
        <div className="flex-grow relative focus-within:z-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            name="mobile-search-candidate"
            id="mobile-search-candidate"
            className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:hidden"
            placeholder="Search courses"
          />
          <input
            type="text"
            name="desktop-search-candidate"
            id="desktop-search-candidate"
            className="hidden w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:block sm:text-sm"
            placeholder="Search courses"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
