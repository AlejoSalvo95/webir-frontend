import React, { useState } from 'react';
import {computer, computerBrands, phone, phoneBrands} from '../Utils/constants'
import SelectPriceRange from './SelectPriceRange'
import Loader from '../Loader';

type setHookFunction = (value: string) => void

export default (selectedPriceRange: string, setSelectedPriceRange: setHookFunction, selectedDevice: string, setSelectedDevice: setHookFunction, setShownComponent: setHookFunction) => {
  // const [loading, setLoading] = useState(false);

  let handleClick = (device: string) => {
    // console.log(loading,'loading')
    // setLoading(true)
    setSelectedDevice(device)
  }
  let brands = selectedDevice === computer.text ? computerBrands : selectedDevice === phone.text ? phoneBrands : []
  return (
    <div>
      {/* loading && Loader() */}
      <div className="big_padding_top">
        <p className="select-text">SELECT BRAND</p>
        { brands.map((brand,ixd) => 
          <button key={ixd} className="select-button" onClick={() => handleClick(brand.text)}>
            <img alt={brand.text} src={brand.imgSrc}/>
            <p>{brand.text}</p>
          </button>
        )}
        {SelectPriceRange(selectedPriceRange, setSelectedPriceRange)}
      </div>
    </div>
  );
}