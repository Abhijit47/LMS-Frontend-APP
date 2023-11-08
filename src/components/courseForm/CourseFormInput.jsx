import React, { Fragment, useState } from "react";
import { handleMessageLimit } from "../../features/handlerFactory";

const CourseFormInput = ({
  courseFormInput,
  courseFormData,
  setCourseFormData,
}) => {
  const [messageCharacterCount, setMessageCharacterCount] = useState(0);

  return (
    <>
      {courseFormInput.map((input, index) => {
        return (
          <Fragment key={index}>
            {index === 1 ? (
              <div className="sm:col-span-2">
                <label
                  htmlFor="course_details"
                  className="block text-sm font-semibold capitalize leading-6 text-gray-900"
                >
                  {input.labelName}
                </label>
                <div className="mt-2.5">
                  <textarea
                    name={input.name}
                    id={input.id}
                    rows="4"
                    required
                    placeholder={input.placeholder}
                    value={input.value}
                    onChange={input.onChange}
                    onKeyUp={(ev) =>
                      handleMessageLimit(
                        ev,
                        setMessageCharacterCount,
                        ".message-warning",
                      )
                    }
                    maxLength={250}
                    className="form-input"
                  ></textarea>
                  <span className="message-warning float-left hidden text-xs text-red-700">
                    Limit upto 250 charcters only
                  </span>
                  {messageCharacterCount === 0 ? (
                    <span className="float-right text-xs font-semibold leading-6 text-gray-900 opacity-0">
                      {messageCharacterCount}
                    </span>
                  ) : (
                    <span className="float-right text-xs font-semibold leading-6 text-gray-900">
                      {messageCharacterCount}
                    </span>
                  )}
                </div>
              </div>
            ) : (
              <div className="sm:col-span-2" key={index}>
                <label
                  htmlFor={input.htmlFor}
                  className="block text-sm font-semibold capitalize leading-6 text-gray-900"
                >
                  {input.labelName}
                </label>
                <div className="mt-2.5">
                  <input
                    type={input.type}
                    name={input.name}
                    id={input.id}
                    required
                    placeholder={input.placeholder}
                    value={input.value}
                    onChange={input.onChange}
                    autoComplete="off"
                    className="form-input"
                  />
                </div>
              </div>
            )}
          </Fragment>
        );
      })}
    </>
  );
};

export default CourseFormInput;
