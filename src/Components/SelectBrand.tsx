import React, { useState } from "react";
import { phone, phoneBrands } from "Utils/constants";
import SelectPriceRange from "./SelectPriceRange";
import Loader from "Loader";
import { setHookFunction, selectBrandPropsType } from "Utils/Types";

export default ({
  selectedPriceRange,
  setSelectedPriceRange,
  changeSelectedBrand,
  changeShownComponent
}: selectBrandPropsType) => {
  let brands = phoneBrands;
  const [loading, setLoading] = useState(false);

  let handleClick = (device: string) => {
    console.log(loading, "loading");
    setLoading(true);
    changeSelectedBrand(device);
  };

  return (
    <div>
      {loading && Loader()}
      <div className="big_padding_top">
        <p className="select-text">SELECT BRAND</p>
        {brands.map((brand, ixd) => (
          <button
            key={ixd}
            className="select-button"
            onClick={() => handleClick(brand.text)}
          >
            <img alt={brand.text} src={brand.imgSrc} />
            <p>{brand.text}</p>
          </button>
        ))}
        {SelectPriceRange(selectedPriceRange, setSelectedPriceRange)}
      </div>
    </div>
  );
};
