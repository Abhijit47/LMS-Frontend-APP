import React from "react";
import SectionFormWrapper from "./SectionFormWrapper";
import QuizOptionsInput from "./QuizOptionsInput";
import SwitchButton from "../button/SwitchButton";
// import Button from "../button/Button";

const QuizForm = (props) => {
  const {
    quiz_title,
    quiz_answer,
    updateFields,
    quizQuestions,
    handleQuizQuestion,
    quizOptions,
    setQuizOptions,
    agreed,
    setAgreed,
  } = props;
  return (
    <SectionFormWrapper title="Quiz Form">
      {/* Quiz title */}
      <div className="col-span-2">
        <label
          htmlFor="quiz_title"
          className="block text-sm font-semibold capitalize leading-6 text-gray-900"
        >
          quiz title
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="quiz_title"
            id="quiz_title"
            required
            autoComplete="off"
            placeholder={"Enter quiz title"}
            className="form-input"
            value={quiz_title}
            onChange={(e) => {
              updateFields({ quiz_title: e.target.value });
            }}
          />
        </div>
      </div>

      {/* Quiz question */}
      <div className="col-span-2">
        <label
          htmlFor="quizQuestion"
          className="block text-sm font-semibold capitalize leading-6 text-gray-900"
        >
          quiz question
        </label>
        <div className="mt-2.5">
          {quizQuestions.map((question, index) => (
            <input
              key={index}
              type="text"
              name="quizQuestion"
              id="quizQuestion"
              required
              autoComplete="off"
              placeholder={"Enter quiz question"}
              className="form-input"
              value={question}
              onChange={(event) => handleQuizQuestion(event, index)}
            />
          ))}
        </div>
      </div>

      {/* Quiz options */}
      <QuizOptionsInput
        quizOptions={quizOptions}
        setQuizOptions={setQuizOptions}
      />

      {/* Quiz answer */}
      <div className="col-span-2">
        <label
          htmlFor="quiz_answer"
          className="block text-sm font-semibold capitalize leading-6 text-gray-900"
        >
          quiz answer
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="quiz_answer"
            id="quiz_answer"
            required
            autoComplete="off"
            placeholder={"Enter quiz answer"}
            className="form-input"
            value={quiz_answer}
            onChange={(e) => {
              updateFields({ quiz_answer: e.target.value });
            }}
          />
        </div>
      </div>

      {/* Switch Button */}
      <div className="col-span-2">
        <SwitchButton agreed={agreed} setAgreed={setAgreed} />
      </div>

      {/* Add section button */}
      {/* <div className="col-span-2 mt-6">
        <Button buttonName={"add section"} agreed={agreed} />
      </div> */}
    </SectionFormWrapper>
  );
};

export default QuizForm;
