import { useState, PureComponent } from 'react';

const useMultiStepForm = (steps = [PureComponent]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((index) => {
      if (index >= steps.length - 1) return index;
      return index + 1;
    });
  }

  function prev() {
    setCurrentStepIndex((index) => {
      if (index <= 0) return index;
      return index - 1;
    });
  }
  function goTo(index) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    next,
    prev,
    goTo,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
};

export default useMultiStepForm;