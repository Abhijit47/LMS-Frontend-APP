import React, { Fragment, useRef, useState } from "react";
import { RadioGroup } from "@headlessui/react";

const QuizOptions = ({ quizes }) => {
  const [selected, setSelected] = useState("");
  const answerRef = useRef();

  const handleAnswer = () => {
    if (answerRef?.current?.classList.contains("opacity-0")) {
      answerRef?.current?.classList.remove("opacity-0");
    } else {
      answerRef?.current?.classList.add("opacity-0");
    }
  };

  return (
    <section className="w-6/12 rounded-lg bg-gray-100 shadow-lg ring-2">
      <div className="w-full px-4 py-4">
        <div className="mx-auto w-full max-w-lg">
          {quizes?.quiz?.map((items, index) => {
            const { quiz_title, quiz_questions, quiz_options, quiz_answer } =
              items;
            return (
              <Fragment key={index}>
                <RadioGroup
                  className={"space-y-4"}
                  value={selected}
                  onChange={setSelected}
                >
                  <RadioGroup.Label className="sr-only">
                    {quiz_title}
                  </RadioGroup.Label>
                  {quiz_questions?.map((question, index) => (
                    <div className="space-y-4" key={index}>
                      <p className="font-medium text-gray-700">{question}</p>
                      {quiz_options?.map((option, index) => (
                        <RadioGroup.Option
                          key={index}
                          value={option}
                          className={({ active, checked }) =>
                            `${
                              active
                                ? "ring-2 ring-white ring-opacity-50 ring-offset-2 ring-offset-blue-300"
                                : ""
                            }
                  ${
                    checked
                      ? "bg-blue-600 bg-opacity-75 text-white"
                      : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-8 py-4 shadow-md focus:outline-none`
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <div className="flex w-full items-center justify-between">
                                <div className="flex items-center">
                                  <div className="text-sm">
                                    <RadioGroup.Label
                                      as="p"
                                      className={`font-normal  ${
                                        checked ? "text-white" : "text-gray-900"
                                      }`}
                                    >
                                      {`Option: ${index + 1}`}
                                    </RadioGroup.Label>
                                    <RadioGroup.Description
                                      as="span"
                                      className={`inline font-medium ${
                                        checked
                                          ? "text-blue-100"
                                          : "text-gray-700"
                                      }`}
                                    >
                                      <span>{option}</span>
                                    </RadioGroup.Description>
                                  </div>
                                </div>
                                {checked && (
                                  <div className="shrink-0 text-white">
                                    <CheckIcon className="h-6 w-6" />
                                  </div>
                                )}
                              </div>
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  ))}

                  {/* Show answer button */}
                  <div className="flex justify-center">
                    <button
                      onClick={handleAnswer}
                      className="rounded-md bg-indigo-500 px-3 py-1 text-white shadow-md"
                    >
                      Show Answer
                    </button>
                  </div>
                  <p ref={answerRef} className="text-center opacity-0">
                    <span>Ans:&nbsp;</span>
                    {quiz_answer}
                  </p>
                </RadioGroup>
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default QuizOptions;
