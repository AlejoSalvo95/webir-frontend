import React, { useState } from "react";
import SelectBrand from "./SelectBrand";
import PhoneService from "Services/PhoneService";
import { selectBrandPropsType } from "Utils/Types";
import useStarshipsService from "Services/PhoneService";

import "./SelectionStyles.css";
import Loader from "Loader";

export default () => {
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [shownComponent, setShownComponent] = useState("SelectDevice");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedMemorySize, setSelectedMemorySize] = useState("");
  const service = useStarshipsService();

  // TODO
  // QUE AL APRETAR UN BOTON QUEDE AZUL O ALGO ASI
  // QUE HAYA UN BOTON BUSCAR QUE TE TRAIGA ESA BUSQUEDA

  let changeSelectedBrand = (brand: string) => {
    setSelectedBrand(brand);
  };
  let changeShownComponent = (component: string) => {
    setShownComponent(component);
  };
  let handleFetchPhones = () => {
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
      {service.status === "loading" && Loader()}
      {service.status === "loaded" &&
        service.payload.results.map(starship => (
          <div key={starship.name}>{starship.price}</div>
        ))}
      {service.status === "error" && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </div>
  );
};
