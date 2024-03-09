import React, { useState } from "react";

const message = ["Learn React", "Apply for jobs", "Invest your new income"];

const Demo = () => {
  const [step, setStep] = useState(1);

  const decrement = () => {
    if (step > 1) setStep(step - 1);
  };
  const increment = () => {
    if (step < 3) setStep(step + 1);
  };

  return (
    <div className=" align-items-center justify-content-cente container border align-self-center mt-2 rounded  ">
      <div className="number row p-2 ">
        <div
          className={
            step === 1
              ? "bg-primary col-sm border rounded m-2"
              : "bg-danger col-sm border rounded m-2"
          }
        >
          1
        </div>
        <div
          className={
            step === 2
              ? "bg-primary col-sm border rounded m-2"
              : "bg-danger col-sm border rounded m-2"
          }
        >
          2
        </div>
        <div
          className={
            step === 3
              ? "bg-primary col-sm border rounded m-2"
              : "bg-danger col-sm border rounded m-2"
          }
        >
          3
        </div>
      </div>

      <div className="message m-2 p-4 ">
        Step {step} : {message[step - 1]}{" "}
      </div>
      <div className="buttons row justify-content-center">
        <button className="col-1 btn btn-primary mx-5 my-1" onClick={decrement}>
          Previous
        </button>
        <button className="col-1 btn btn-primary mx-5 my-1" onClick={increment}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Demo;
