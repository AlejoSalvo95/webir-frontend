import React, { useState } from "react";
import SelectBrand from "Components/SelectBrand";
import SelectPriceRange from "Components/SelectPriceRange";
import SelectMemorySize from "Components/SelectMemorySize";

import Phones from "./Phones";
import PhoneService from "Services/PhoneService";
import {
  selectBrandPropsType,
  PhoneQuery,
  ServiceSuccess,
  ServiceError,
  PriceRange
} from "Utils/Types";
import getPhonesService from "Services/PhoneService";

import "./SelectionStyles.css";
import Loader from "Loader";
let defaultSearch: PhoneQuery = {
  brand: "apple",
  lowest_price: 200,
  highest_price: 300,
  memory: 32
};
export default () => {
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [showLoader, setShowLoader] = useState(false);
  const [shownComponent, setShownComponent] = useState("SelectDevice");
  const [selectedBrand, setSelectedBrand] = useState();
  const [selectedPriceRange, setSelectedPriceRange] = useState();
  const [selectedMemorySize, setSelectedMemorySize] = useState();
  let phoneResponse: ServiceSuccess | ServiceError | undefined;

  let changeSelectedMemorySize = (memory: number) => {
    setSelectedMemorySize(memory);
  };
  let changeSelectedPriceRange = (princeRange: PriceRange) => {
    setSelectedPriceRange(princeRange);
  };
  let changeSelectedBrand = (brand: string) => {
    setSelectedBrand(brand);
  };
  let changeShownComponent = (component: string) => {
    setShownComponent(component);
  };
  let handleFetchPhones = async () => {
    console.log(selectedBrand, selectedPriceRange, selectedMemorySize);
    if (selectedBrand && selectedPriceRange && selectedMemorySize) {
      setShowLoader(true);
      let query: PhoneQuery = {
        brand: selectedBrand,
        lowest_price: selectedPriceRange.lowest,
        highest_price: selectedPriceRange.highest,
        memory: selectedMemorySize
      };
      // phoneResponse = await getPhonesService(query);
      setShowLoader(false);
      console.log("clicked this handle phones");
    } else {
      console.log("missing params");
    }
  };
  let selectBrandProps: selectBrandPropsType = {
    selectedMemorySize,
    changeSelectedMemorySize,
    selectedBrand,
    changeSelectedBrand,
    changeShownComponent
  };
  return (
    <div>
      {<SelectBrand {...selectBrandProps} />}
      {
        <SelectPriceRange
          selectedPriceRange={selectedPriceRange}
          changeSelectedPriceRange={changeSelectedPriceRange}
        />
      }
      {
        <SelectMemorySize
          selectedMemorySize={selectedMemorySize}
          changeSelectedMemorySize={changeSelectedMemorySize}
        />
      }

      {<Phones />}
      <div className="margin_10_0_0_0">
        <button onClick={handleFetchPhones} className="get-prices">
          Get best prices!
        </button>
      </div>
      {showLoader && Loader()}
      {phoneResponse &&
        phoneResponse.status === "success" &&
        phoneResponse.payload.data &&
        phoneResponse.payload.data.map((starship, idx) => (
          <div key={idx}>{starship.price}</div>
        ))}
      {phoneResponse && phoneResponse.status === "error" && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </div>
  );
};
