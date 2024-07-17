import React, { useState } from "react";
import diceIcon from "./images/icon-dice.svg";
import line from "./images/pattern-divider-mobile.svg";

const Advice = () => {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState("");

  const fetchAdvices = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    setAdviceId(data.slip.id);
  };

  return (
    <div className="flex justify-center items-center bg-gray-900 min-h-screen">
      <div className="relative p-6 bg-gray-700 rounded-lg shadow-lg text-center max-w-xs w-full">
        <p className="text-sm text-green-500 mb-4">ADVICE #{adviceId}</p>
        <p className="text-lg font-semibold mb-2">"{advice}"</p>
        <div className="flex justify-center mb-6">
          <img src={line} alt="line" />
        </div>
        <button
          onClick={fetchAdvices}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 p-3 rounded-full bg-green-300 hover:bg-green-500 "
        >
          <img src={diceIcon} alt="diceIcon" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Advice;
