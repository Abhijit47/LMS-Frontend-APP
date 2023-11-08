import React, { Fragment, useState } from "react";
// import QuizQuestionsInput from "./QuizQuestionsInput";
import QuizOptionsInput from "./QuizOptionsInput";
import { handleMessageLimit } from "../../features/handlerFactory";

const SectionFormInput = ({
  sectionFormInput,
  sectionFormData,
  setSectionFormData,
  quizQuestion,
  setQuizQuestion,
  quizOptions,
  setQuizOptions,
}) => {
  const [messageCharacterCount, setMessageCharacterCount] = useState(0);
  // eslint-disable-next-line
  const { section_id, quiz_question, quiz_answer } = sectionFormData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "quiz_question") {
      // setQuizQuestion((prev) => [...prev, value]);
      setQuizQuestion([value]);
    } else {
      setSectionFormData({ ...sectionFormData, [name]: value });
    }
  };

  return (
    <>
      {/* Course ID */}
      {/* <div className="sm:col-span-2">
        <label
          htmlFor="section_id"
          className="block text-sm font-semibold capitalize leading-6 text-gray-900"
        >
          section id
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="section_id"
            id="section_id"
            value={section_id || "650aa3461af69630932ed764"}
            onChange={handleChange}
            required={true}
            disabled
            autoComplete="off"
            placeholder={section_id ? section_id : "Section ID"}
            className="form-input"
          />
        </div>
      </div> */}

      {/* Loop through other inputs */}
      {sectionFormInput.map((input, index) => {
        return (
          <Fragment key={index}>
            {index === 1 ? (
              <div className="col-span-2">
                <label
                  htmlFor={input.labelFor}
                  className="block text-sm font-semibold capitalize leading-6 text-gray-900"
                >
                  {input.labelName}
                </label>
                <div className="mt-2.5">
                  <textarea
                    name={input.name}
                    id={input.id}
                    rows="4"
                    value={input.value}
                    onChange={handleChange}
                    onKeyUp={(ev) =>
                      handleMessageLimit(
                        ev,
                        setMessageCharacterCount,
                        ".message-warning-section",
                      )
                    }
                    maxLength={250}
                    required={true}
                    autoComplete={input.autocomplete}
                    placeholder={input.placeholder}
                    className="form-input"
                  ></textarea>
                  <span className="message-warning-section float-left hidden text-xs text-red-700">
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
              <Fragment>
                {index !== 3 ? (
                  <div className="col-span-2" key={index}>
                    <label
                      htmlFor={input.labelFor}
                      className="block text-sm font-semibold capitalize leading-6 text-gray-900"
                    >
                      {input.labelName}
                    </label>
                    <div className="mt-2.5">
                      <input
                        type={input.type}
                        name={input.name}
                        id={input.id}
                        value={input.value}
                        onChange={handleChange}
                        required={true}
                        autoComplete={input.autocomplete}
                        placeholder={input.placeholder}
                        className="form-input"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="col-span-2" key={index}>
                    <label
                      htmlFor={input.labelFor}
                      className="mb-2 block text-sm font-semibold capitalize leading-6 text-gray-900 "
                    >
                      {input.labelName}
                    </label>
                    <div className="relative mb-4 flex w-full items-stretch">
                      <div className="-mr-px flex">
                        <span className="flex border-collapse select-none items-center rounded-l-md rounded-r-none bg-gray-200 px-3 text-sm leading-normal text-gray-500 hover:ring-2 hover:ring-indigo-600">
                          https://www.youtube.com/embed/
                        </span>
                      </div>

                      <input
                        type={input.type}
                        name={input.name}
                        id={input.id}
                        value={input.value}
                        onChange={handleChange}
                        required={true}
                        autoComplete={input.autocomplete}
                        placeholder={input.placeholder}
                        className="form-input rounded-l-none"
                        minLength={11}
                        maxLength={11}
                      />
                    </div>
                  </div>
                )}
              </Fragment>
            )}
          </Fragment>
        );
      })}

      {/* Quiz questions multiple*/}
      {/* <QuizQuestionsInput
        quizQuestions={quizQuestions}
        setQuizQuestions={setQuizQuestions}
      /> */}
      {/* Quiz question single*/}
      <div className="col-span-2">
        <label
          htmlFor={`quiz_question`}
          className="block text-sm font-semibold capitalize leading-6 text-gray-900"
        >
          {`quiz question`}
        </label>

        <div className="flex items-center gap-4">
          <input
            type="text"
            id={`quiz_question`}
            name={`quiz_question`}
            className="form-input"
            placeholder={`Enter Quiz Question`}
            required
            autoComplete="off"
            value={quizQuestion}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Quiz options multiple*/}
      <QuizOptionsInput
        quizOptions={quizOptions}
        setQuizOptions={setQuizOptions}
      />

      {/* Quiz answer single*/}
      <div className="col-span-2">
        <label
          htmlFor="quiz_answer"
          className="block text-sm font-semibold capitalize leading-6 text-gray-900"
        >
          quiz answer
        </label>
        <div className="">
          <input
            type="text"
            name="quiz_answer"
            id="quiz_answer"
            required={true}
            value={quiz_answer}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Enter Quiz Answer"
            className="form-input"
          />
        </div>
      </div>
    </>
  );
};

export default SectionFormInput;
