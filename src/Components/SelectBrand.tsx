import React, { useState } from "react";
import { phone, phoneBrands } from "Utils/constants";
import SelectPriceRange from "Components/SelectPriceRange";
import SelectMemorySize from "Components/SelectMemorySize";

import Loader from "Loader";
import { selectBrandPropsType } from "Utils/Types";

export default ({
  selectedPriceRange,
  changeSelectedPriceRange,
  selectedMemorySize,
  changeSelectedMemorySize,
  selectedBrand,
  changeSelectedBrand,
  changeShownComponent
}: selectBrandPropsType) => {
  let brands = phoneBrands;
  const [loading, setLoading] = useState(false);

  let handleClick = (brand: string) => {
    console.log(loading, "loading");
    // setLoading(true);
    changeSelectedBrand(brand);
  };

  return (
    <div>
      {loading && Loader()}
      <div className="big_padding_top">
        <p className="select-text">SELECT BRAND</p>
        {brands.map((brand, ixd) => (
          <button
            key={ixd}
            className={"select-button" + (selectedBrand === brand.text ? " selected" : "")}
            onClick={() => handleClick(brand.text)}
          >
            <img alt={brand.text} src={brand.imgSrc} />
          </button>
        ))}
        {SelectPriceRange(selectedPriceRange, changeSelectedPriceRange)}
        {SelectMemorySize(selectedMemorySize, changeSelectedMemorySize)}
      </div>
    </div>
  );
};
