import React from "react";
import { pricesRange } from "Utils/constants";
import { pricesRangeText } from "Utils/GeneralFunctions";
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
                pricesRangeText(selectedPriceRange.lowest, selectedPriceRange.highest) === pricesRangeText(priceRange.lowest, priceRange.highest)
                ? " selected"
                : "")
            }
          >
            {pricesRangeText(priceRange.lowest, priceRange.highest)}
          </button>
        );
      })}
    </div>
  );
};
