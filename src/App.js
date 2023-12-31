import { useState } from "react";
import StepMessag from "./StepMessag";
import Button from "./Button";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep(step - 1)
  }
  function handleNext() {
    if (step < 3) setStep(step + 1)
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <StepMessag step={step}>
            <p>{messages[step - 1]}</p>
            <div className="buttons">
              <Button
                textColor='#333'
                bgColor='eee'
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}>
                Learn how
              </Button>
            </div>
          </StepMessag>

          <div className="buttons">
            <Button
              textColor='#fff'
              bgColor='#7950f2'
              onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>

            <Button
              textColor='#fff'
              bgColor='#7950f2'
              onClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

