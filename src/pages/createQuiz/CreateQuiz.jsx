import React, { useState } from "react";
// eslint-disable-next-line
import QuizForm from "../../components/sectionForm/QuizForm";
// eslint-disable-next-line
import QuizQuestionsInput from "../../components/sectionForm/QuizQuestionsInput";
// eslint-disable-next-line
import QuizOptionsInput from "../../components/sectionForm/QuizOptionsInput";
import Button from "../../components/button/Button";

const CreateQuiz = () => {
  // eslint-disable-next-line
  const [agreed, setAgreed] = useState(false);
  return (
    <section className="container mx-auto h-full py-24">
      <div className="mx-auto flex max-w-xl flex-col gap-y-4 rounded-md p-8 shadow-lg ring-1 ring-gray-400">
        {/* <QuizForm
          quizQuestions={[]}
          quizOptions={[]}
          agreed={agreed}
          setAgreed={setAgreed}
        /> */}
        <h3>Coming soon...</h3>
        <Button buttonName={"Submit"} agreed={agreed} />
      </div>
    </section>
  );
};

export default CreateQuiz;
