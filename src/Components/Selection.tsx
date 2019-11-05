import React, { useState } from "react";
import SelectBrand from "./SelectBrand";
import PhoneService from "Services/PhoneService";
import { selectBrandPropsType, PhoneQuery, ServiceSuccess, ServiceError } from "Utils/Types";
import getPhonesService from "Services/PhoneService";

import "./SelectionStyles.css";
import Loader from "Loader";
let defaultSearch: PhoneQuery = {
  brand: 'apple',
  lowest_price: 200,
  highest_price: 300,
  memory: 32
}
export default () => {
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [showLoader, setShowLoader] = useState(false);
  const [shownComponent, setShownComponent] = useState("SelectDevice");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedMemorySize, setSelectedMemorySize] = useState("");
  let phoneResponse: ServiceSuccess | ServiceError | undefined

  // TODO
  // QUE AL APRETAR UN BOTON QUEDE AZUL O ALGO ASI
  // QUE HAYA UN BOTON BUSCAR QUE TE TRAIGA ESA BUSQUEDA

  let changeSelectedBrand = (brand: string) => {
    setSelectedBrand(brand);
  };
  let changeShownComponent = (component: string) => {
    setShownComponent(component);
  };
  let handleFetchPhones = async () => {
    setShowLoader(true)
    phoneResponse = await getPhonesService(defaultSearch);
    setShowLoader(false)

    console.log("clicked this handle phones");
  };
  let selectBrandProps: selectBrandPropsType = {
    selectedPriceRange,
    setSelectedPriceRange,
    selectedMemorySize,
    setSelectedMemorySize,
    changeSelectedBrand,
    changeShownComponent
  };
  return (
    <div>
      {<SelectBrand {...selectBrandProps} />}
      {<p onClick={handleFetchPhones}>Cickea aca para mandarlo</p>}
      {showLoader && Loader()}
      {phoneResponse && phoneResponse.status === "success" && phoneResponse.payload.data &&
        phoneResponse.payload.data.map((starship, idx) => (
          <div key={idx}>{starship.price}</div>
        ))}
      {phoneResponse && phoneResponse.status === "error" && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </div>
  );
};
