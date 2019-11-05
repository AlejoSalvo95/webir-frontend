import React from "react";
import { memorySizes } from "Utils/constants";
import { setHookFunctionNumber } from "Utils/Types";

export default (
  selectedMemorySize: number,
  changeSelectedMemorySize: setHookFunctionNumber
) => {
  let handleClick = (memorySize: number) => {
    changeSelectedMemorySize(memorySize);
  };

  return (
    <div>
      <p className="select-text">SELECT MEMORY SIZE</p>
      {memorySizes.map((memorySize, idx) => (
        <button
          onClick={() => handleClick(memorySize)}
          key={idx}
          className={"select-price-button margin_0_10" + (memorySize === selectedMemorySize ? " selected" : "")}
        >
          {memorySize}
        </button>
      ))}
    </div>
  );
};
