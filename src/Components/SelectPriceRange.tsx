import React from "react";
import { pricesRange } from "Utils/constants";
import { PriceRange, selectPriceRangePropsType } from "Utils/Types";

export default ({
  selectedPriceRange,
  changeSelectedPriceRange
}: selectPriceRangePropsType) => {
  let handleClick = (range: PriceRange) => {
    changeSelectedPriceRange(range);
  };

  return (
    <div>
      <p className="select-text">SELECT PRICE RANGE</p>
      {pricesRange.map((priceRange, idx) => {
        return (
          <button
            onClick={() => handleClick(priceRange)}
            key={idx}
            className={
              "select-price-button margin_0_10" +
              (selectedPriceRange &&
              priceRange &&
              selectedPriceRange.text === priceRange.text
                ? " selected"
                : "")
            }
          >
            {priceRange.text}
          </button>
        );
      })}
    </div>
  );
};
