import React, { useState } from "react";
import content from "../Data/ProductsSample";

const Unkam = () => {
  const [ActiveButton, setActiveButton] = useState(0);

  return (
    <div className="container">
      <div className="row">
        <div
          className={
            ActiveButton === 0
              ? "col p-2 mx-4 my-2 border rounded bg-info"
              : "col p-2 mx-4 my-2 border rounded"
          }
          onClick={() => setActiveButton(0)}
        >
          One Thing
        </div>
        <div
          className={
            ActiveButton === 1
              ? "col p-2 mx-4 my-2 border rounded bg-info"
              : "col p-2 mx-4 my-2 border rounded"
          }
          onClick={() => setActiveButton(1)}
        >
          Second Thing
        </div>
        <div
          className={
            ActiveButton === 2
              ? "col p-2 mx-4 my-2 border rounded bg-info"
              : "col p-2 mx-4 my-2 border rounded"
          }
          onClick={() => setActiveButton(2)}
        >
          Third Thing
        </div>
      </div>
      <div className="container">
        <ul>
          {content[ActiveButton].map((data) => (
            <li key={data}>{data}</li>
          ))}
          <li>dsads</li>
        </ul>
      </div>
    </div>
  );
};

export default Unkam;
