import React from "react";
import { pricesRange } from "Utils/constants";
import { PriceRange, setHookFunctionPriceRange } from "Utils/Types";

export default (
  selectedPriceRange: PriceRange,
  setSelectedPriceRange: setHookFunctionPriceRange
) => {
  let handleClick = (range: PriceRange) => {
    setSelectedPriceRange(range);
  };

  return (
    <div>
      <p className="select-text">SELECT PRICE RANGE</p>
      {pricesRange.map((priceRange, idx) => {
        return (
          <button
            onClick={() => handleClick(priceRange)}
            key={idx}
            className={"select-price-button margin_0_10" + (selectedPriceRange && priceRange && selectedPriceRange.text === priceRange.text ? " selected" : "")}
          >
            {priceRange.text}
          </button>
        );
      })}
    </div>
  );
};
