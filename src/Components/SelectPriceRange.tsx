import React from "react";
import { prices, pricesRange } from "Utils/constants";

type setHookFunction = (value: string) => void;

export default (
  selectedPriceRange: string,
  setSelectedPriceRange: setHookFunction
) => {
  let handleClick = (range: string) => {
    setSelectedPriceRange(range);
  };

  return (
    <div>
      <p className="select-text">SELECT PRICE RANGE</p>
      {pricesRange.map((priceRange, idx) => {
        let priceRangeText = priceRange.bottom + " - " + priceRange.top;
        return (
          <button
            onClick={() => handleClick(priceRangeText)}
            key={idx}
            className="select-price-button margin_0_10"
          >
            {priceRangeText}
          </button>
        );
      })}
    </div>
  );
};
