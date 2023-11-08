import React, { Fragment } from "react";
import ButtonPlusIcon from "../button/ButtonPlusIcon";
import ButtonMinusIcon from "../button/ButtonMinusIcon";

const QuizOptionsInput = ({ quizOptions, setQuizOptions }) => {
  // handle input change
  const handleInputChange = (event, index) => {
    const newInputValues = [...quizOptions];
    newInputValues[index] = event.target.value;
    setQuizOptions(newInputValues);
  };

  // add input field
  const addInputField = () => {
    setQuizOptions([...quizOptions, ""]); // Add a new empty input field
  };

  // remove input field
  const removeInputField = (index) => {
    const newInputValues = [...quizOptions];
    newInputValues.splice(index, 1); // Remove the input field at the specified index
    setQuizOptions(newInputValues);
  };

  return (
    <Fragment>
      {quizOptions.map((value, index) => (
        <div className="col-span-2" key={index}>
          <label
            htmlFor={`quiz_options${index + 1}`}
            className="block text-sm font-semibold capitalize leading-6 text-gray-900"
          >
            {`quiz options ${index + 1}`}
          </label>
          <div className="flex items-center gap-1">
            <input
              type="text"
              id={`quiz_options${index + 1}`}
              name={`quiz_options${index + 1}`}
              autoComplete="off"
              required
              className="form-input"
              placeholder={`Enter Quiz Options ${index + 1}`}
              value={value}
              onChange={(e) => handleInputChange(e, index)}
            />
            <div className="flex gap-3 p-1">
              {index === 3 ? (
                <button
                  disabled
                  className="rounded-full bg-green-400 px-1 py-1 text-white"
                >
                  <ButtonPlusIcon />
                </button>
              ) : (
                <button
                  onClick={addInputField}
                  className="rounded-full bg-green-600 px-1 py-1 text-white"
                >
                  <ButtonPlusIcon />
                </button>
              )}

              <button
                onClick={() => removeInputField(index)}
                className="rounded-full bg-red-600 px-1 py-1 text-white"
              >
                <ButtonMinusIcon />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/*Add quiz option button */}
      {/* <div
        className={`${quizOptions.length <= 0 ? "opacity-100" : "opacity-0"}`}
      > */}
      {/* {quizOptions.length <= 0 && ( */}
      <div
        className={`${
          quizOptions.length > 0 && "hidden"
        } col-span-2 justify-self-center`}
      >
        <button
          onClick={addInputField}
          className="rounded-lg bg-indigo-600 px-3 py-1 text-sm text-gray-100 hover:bg-indigo-500"
        >
          Add Quiz Options
        </button>
      </div>
      {/* )} */}
      {/* </div> */}
    </Fragment>
  );
};

export default QuizOptionsInput;
