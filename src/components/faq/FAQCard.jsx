import React, { useRef, useState } from "react";
import { MinusIcon, PlusIcon } from "../../assets/svgs/icons";

const FAQCard = ({ faqsList, idx }) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="mt-5 space-y-3 overflow-hidden border-b-2 border-gray-500"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <div className="flex cursor-pointer items-center justify-between p-2 text-gray-700">
        <h5 className="text-lg font-medium">{faqsList?.q}</h5>
        <p>{state ? <MinusIcon /> : <PlusIcon />}</p>
      </div>
      <div
        ref={answerElRef}
        className="p-2 duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <p className="text-gray-500">{faqsList?.a}</p>
      </div>
    </div>
  );
};

export default FAQCard;
