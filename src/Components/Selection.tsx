import React, { useState } from "react";
import SelectBrand from "Components/SelectBrand";
import SelectPriceRange from "Components/SelectPriceRange";
import SelectMemorySize from "Components/SelectMemorySize";
import Phones from "./Phones";
import {
  selectBrandPropsType,
  PhoneQuery,
  PriceRange,
  phoneResponseType,
  phonePropsType
} from "Utils/Types";
import getPhonesService from "Services/PhoneService";
import "./SelectionStyles.css";
import Loader from "Loader";

let phoneDefaultResponse: phoneResponseType = undefined;
export default () => {
  const [showLoader, setShowLoader] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState();
  const [selectedPriceRange, setSelectedPriceRange] = useState();
  const [selectedMemorySize, setSelectedMemorySize] = useState();
  const [phoneResponse, setPhoneResponse] = useState(phoneDefaultResponse);

  let changeSelectedMemorySize = (memory: number) => {
    setSelectedMemorySize(memory);
  };
  let resetSetPhoneResponse = () => {
    setPhoneResponse(phoneDefaultResponse);
  };
  let changeSelectedPriceRange = (princeRange: PriceRange) => {
    setSelectedPriceRange(princeRange);
  };
  let changeSelectedBrand = (brand: string) => {
    setSelectedBrand(brand);
  };
  let handleFetchPhones = async () => {
    if (selectedBrand && selectedPriceRange && selectedMemorySize) {
      setShowLoader(true);
      let query: PhoneQuery = {
        brand: selectedBrand,
        lowest_price: selectedPriceRange.lowest,
        highest_price: selectedPriceRange.highest,
        memory: selectedMemorySize
      };
      setPhoneResponse(await getPhonesService(query));
      setShowLoader(false);
    }
  };
  let selectBrandProps: selectBrandPropsType = {
    selectedBrand,
    changeSelectedBrand
  };
  let phoneProps: phonePropsType = {
    resetSetPhoneResponse,
    phonesData:
      phoneResponse && phoneResponse.status === "success"
        ? phoneResponse.payload.data
        : []
  };
  return (
    <div>
      {showLoader && Loader()}
      {!phoneResponse ? (
        <div>
          <SelectBrand {...selectBrandProps} />
          <SelectPriceRange
            selectedPriceRange={selectedPriceRange}
            changeSelectedPriceRange={changeSelectedPriceRange}
          />
          <SelectMemorySize
            selectedMemorySize={selectedMemorySize}
            changeSelectedMemorySize={changeSelectedMemorySize}
          />
          <div className="margin_40_0_0_0">
            <button
              onClick={handleFetchPhones}
              className={
                "get-prices" +
                (selectedBrand && selectedPriceRange && selectedMemorySize
                  ? ""
                  : " disabled")
              }
            >
              Get best prices!
            </button>
          </div>
        </div>
      ) : (
          <div>
            {phoneResponse &&
              phoneResponse.status === "success" &&
              phoneResponse.payload.data && <Phones {...phoneProps} />}
          </div>
        )}

      {phoneResponse && phoneResponse.status === "error" && (
        <div>There was an internal error, our sincere apologies.</div>
      )}
    </div>
  );
};
