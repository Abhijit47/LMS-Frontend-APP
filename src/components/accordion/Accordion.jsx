import React, { useState } from "react";

const Accordion = ({ items }) => {
  // console.log("item", items);
  //create state variable
  const [openIndexes, setOpenIndexes] = useState([]);

  //function handleItemClick
  const handleItemClick = (index) => {
    setOpenIndexes((prevState) => {
      if (prevState.includes(index)) {
        //if an item is already open,remove list
        return prevState.filter((i) => i !== index);
      } else {
        return [...prevState, index];
      }
    });
  };

  return (
    <div className="mx-auto w-full">
      {items?.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            type="button"
            onClick={() => handleItemClick(index)}
            className="focus:shadow-outline-blue my-1 flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-4 text-left text-sm font-medium text-black ring-2 focus:outline-none"
          >
            <span className="text-xl font-medium">{item.section_name}</span>
            <span className="ml-6 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    openIndexes.includes(index)
                      ? "M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                      : "M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                  }
                />
              </svg>
            </span>
          </button>
          {openIndexes.includes(index) && (
            <div className="relative h-screen w-full flex-col items-center justify-between rounded-md bg-gray-200 px-4 py-4 text-left font-medium">
              <p className="py-2 text-lg text-gray-800">
                {item?.section_description}
              </p>
              <p className="text-md py-2 text-gray-700">
                {item.video?.video_title}
              </p>

              <iframe
                // width="450"
                // height="250"
                src={item.video?.video_url}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
                className="w-full rounded-md xs:h-[250px] lg:h-[80vh]"
              ></iframe>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
