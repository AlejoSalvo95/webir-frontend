import React from "react";
import { memorySizes } from "Utils/constants";

type setHookFunction = (value: string) => void;

export default (
  selectedMemorySize: string,
  setSelectedMemorySize: setHookFunction
) => {
  let handleClick = (memorySize: string) => {
    setSelectedMemorySize(memorySize);
  };

  return (
    <div>
      <p className="select-text">SELECT MEMORY SIZE</p>
      {memorySizes.map((memorySize, idx) => (
        <button
          onClick={() => handleClick(memorySize)}
          key={idx}
          className="select-price-button margin_0_10"
        >
          {memorySize}
        </button>
      ))}
    </div>
  );
};
