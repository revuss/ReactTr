import React, { useState } from "react";
import content from "../Data/ProductsSample";

const SampleSpace = () => {
  const [activeButton, setactiveButton] = useState(0);
  return (
    <div className="contianer align-items-center justify-content-center border rounded m-2 p-4">
      <div className="row">
        <div
          className={
            activeButton === 0
              ? "col border rounded bg-success p-3 mx-3 my-2"
              : "col border rounded bg-light p-3 mx-3 my-2"
          }
          onClick={() => setactiveButton(0)}
        >
          Why react
        </div>
        <div
          className={
            activeButton === 1
              ? "col border rounded bg-success p-3 mx-3 my-2"
              : "col border rounded bg-light p-3 mx-3 my-2"
          }
          onClick={() => setactiveButton(1)}
        >
          Core Feature
        </div>
        <div
          className={
            activeButton === 2
              ? "col border rounded bg-success p-3 mx-3 my-2"
              : "col border rounded bg-light p-3 mx-3 my-2"
          }
          onClick={() => setactiveButton(2)}
        >
          Related resources
        </div>
      </div>
      <div className="card">
        <ul>
          {content[activeButton].map((data) => (
            <li key={data}>{data}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SampleSpace;
