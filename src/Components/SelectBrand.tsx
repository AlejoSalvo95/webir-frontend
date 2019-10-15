import React, { useState } from 'react';
import {computer, computerBrands, phone, phoneBrands, prices} from '../Utils/constants'
import SelectPriceRange from './SelectPriceRange'

type setHookFunction = (value: string) => void

export default (selectedPriceRange: string, setSelectedPriceRange: setHookFunction, selectedDevice: string, setSelectedDevice: setHookFunction, setShownComponent: setHookFunction) => {

  let handleClick = (device: string) => {
      setSelectedDevice(device)
  }
  let brands = selectedDevice === computer.text ? computerBrands : selectedDevice === phone.text ? phoneBrands : []

  return (
    <div>
      <p className="select-text">SELECT BRAND</p>
      { brands.map((brand,ixd) => 
        <button key={ixd} className="select-button" onClick={() => handleClick(brand.text)}>
          <img src={brand.imgSrc}/>
          <p>{brand.text}</p>
        </button>
      )}
      {SelectPriceRange(selectedPriceRange, setSelectedPriceRange)}
    </div>
  );
}