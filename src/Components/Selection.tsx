import React, { useState } from "react";
import SelectBrand from "./SelectBrand";

import { selectBrandPropsType } from "Utils/Types";

import "./SelectionStyles.css";

export default () => {
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [shownComponent, setShownComponent] = useState("SelectDevice");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  let changeSelectedBrand = (brand: string) => {
    setSelectedBrand(brand);
  };
  let changeShownComponent = (component: string) => {
    setShownComponent(component);
  };
  let selectBrandProps: selectBrandPropsType = {
    selectedPriceRange,
    setSelectedPriceRange,
    changeSelectedBrand,
    changeShownComponent
  };
  return <div>{<SelectBrand {...selectBrandProps} />}</div>;
};
