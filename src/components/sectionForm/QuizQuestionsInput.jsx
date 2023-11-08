import React, { Fragment } from "react";
import ButtonPlusIcon from "../button/ButtonPlusIcon";
import ButtonMinusIcon from "../button/ButtonMinusIcon";

const QuizQuestionsInput = ({ quizQuestions, setQuizQuestions }) => {
  const handleInputChange = (event, index) => {
    const newInputValues = [...quizQuestions];
    newInputValues[index] = event.target.value;
    setQuizQuestions(newInputValues);
  };

  const addInput = () => {
    setQuizQuestions([...quizQuestions, ""]); // Add a new empty input field
  };

  const removeInput = (index) => {
    const newInputValues = [...quizQuestions];
    newInputValues.splice(index, 1); // Remove the input field at the specified index
    setQuizQuestions(newInputValues);
  };

  // const handleSubmit = () => {
  //   console.log("Submitted Values:", inputValues);
  //   // Perform any additional actions here
  // };

  return (
    <Fragment>
      {quizQuestions.map((value, index) => (
        <div className="sm:col-span-2" key={index}>
          <label
            htmlFor={`quiz_questions${index + 1}`}
            className="block text-sm font-semibold capitalize leading-6 text-gray-900"
          >
            {`quiz questions ${index + 1}`}
          </label>

          <div className="flex items-center gap-4">
            <input
              type="text"
              id={`quiz_questions${index + 1}`}
              name={`quiz_questions${index + 1}`}
              className="form-input mb-4"
              placeholder={`Enter Quiz Questions ${index + 1}`}
              required
              autoComplete="off"
              value={value}
              onChange={(e) => handleInputChange(e, index)}
            />
            <div className="mb-4 flex gap-1">
              <button
                onClick={addInput}
                className="rounded-full bg-green-600 px-1 py-1 text-white"
              >
                <ButtonPlusIcon />
              </button>
              <button
                onClick={() => removeInput(index)}
                className="rounded-full bg-red-600 px-1 py-1 text-white"
              >
                <ButtonMinusIcon />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Button */}
      <div className="sm:col-span-2">
        {quizQuestions.length <= 0 && (
          <div className="flex justify-center">
            <button
              onClick={addInput}
              className="rounded-lg bg-indigo-600 px-3 py-1 text-sm text-gray-100 hover:bg-indigo-500"
            >
              Add Quiz Quesions
            </button>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default QuizQuestionsInput;
