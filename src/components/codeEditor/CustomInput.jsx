import React from "react";
import { classnames } from "../../utils/general";

const CustomInput = ({ customInput, setCustomInput }) => {
  return (
    <>
      {" "}
      <textarea
        id="customInput"
        name="customInput"
        autoComplete="off"
        rows="5"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder={`Custom input`}
        className={classnames(
          "transition hover:shadow z-10 mt-2 w-full resize-none rounded-md border-2 border-black bg-white px-4 py-1 shadow-[5px_5px_0px_0px_rgba(0,0,0)] duration-200 focus:outline-none",
        )}
      ></textarea>
    </>
  );
};

export default CustomInput;
