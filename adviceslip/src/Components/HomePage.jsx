import React, { useEffect, useState } from "react";
import { fetchAdvice } from "../Service/adviceService";
import Message from "./Message";

const HomePage = () => {
  const [advice, setAdvice] = useState("Click button to generate a quote");
  const [pcount, setCount] = useState(0);
  const [isOpen, setOpen] = useState(true);

  useEffect(() => {
    const titleWithIcon = "Advice Slip";
    document.title = titleWithIcon;
  }, []);

  const getAdvice = async () => {
    try {
      const advice = await fetchAdvice();
      setAdvice(advice);
      setCount((prevCount) => prevCount + 1);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  return (
    <>
      <button> cross</button>
      {isOpen && (
        <div className="font-mono App h-screen bg-gray-900 flex flex-col justify-center items-center">
          <h1 className="text-center text-white text-5xl font-bold mb-4">
            {advice}
          </h1>
          <div>
            <button
              onClick={getAdvice}
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 my-10  px-4 rounded"
            >
              Get Advice
            </button>
          </div>
          <Message count={pcount} />
        </div>
      )}
    </>
  );
};

export default HomePage;
