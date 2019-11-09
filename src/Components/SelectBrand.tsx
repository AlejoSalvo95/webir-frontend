import React from "react";
import { phoneBrands } from "Utils/constants";

import { selectBrandPropsType } from "Utils/Types";

export default ({
  selectedBrand,
  changeSelectedBrand
}: selectBrandPropsType) => {
  let brands = phoneBrands;

  let handleClick = (brand: string) => {
    changeSelectedBrand(brand);
  };

  return (
    <div>
      <div className="big_padding_top">
        <p className="select-text">SELECT BRAND</p>
        {brands.map((brand, ixd) => (
          <button
            key={ixd}
            className={
              "select-button" +
              (selectedBrand === brand.text ? " selected" : "")
            }
            onClick={() => handleClick(brand.text)}
          >
            <img alt={brand.text} src={brand.imgSrc} />
          </button>
        ))}
      </div>
    </div>
  );
};
