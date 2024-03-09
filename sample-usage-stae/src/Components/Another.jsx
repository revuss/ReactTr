import React, { useState } from "react";
const message = ["Learn React", "Apply for jobs", "Invest your new income"];

const Another = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setOpen] = useState(true);

  const increment = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  const decrement = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  return (
    <div>
      <button onClick={() => setOpen(!isOpen)}>Logout</button>
      {isOpen ? (
        <div className="container justify-content-center align-items-center text-center">
          <div className="row">
            <div
              className={
                step >= 1
                  ? "col border rounded p-4 mx-2 bg-info"
                  : "col border rounded p-4 mx-2"
              }
            >
              1
            </div>
            <div
              className={
                step >= 2
                  ? "col border rounded p-4 mx-2 bg-info"
                  : "col border rounded p-4 mx-2"
              }
            >
              2
            </div>
            <div
              className={
                step >= 3
                  ? "col border rounded p-4 mx-2 bg-info"
                  : "col border rounded p-4 mx-2"
              }
            >
              3
            </div>
          </div>
          <div className="container my-5">
            Step {step} : {message[step - 1]}
          </div>
          <div className="row justify-content-center align-items-center d-flex">
            <div
              className="col-2 rounded border bg-dark p-2 text-white mx-4 my-4"
              onClick={decrement}
            >
              Previous
            </div>
            <div
              className="col-2 rounded border bg-dark p-2 text-white mx-4 my-4"
              onClick={increment}
            >
              Next
            </div>
          </div>
        </div>
      ) : (
        <div>Login needed</div>
      )}
    </div>
  );
};

export default Another;
