import React from 'react';
import {prices, pricesRange} from 'Utils/constants'

type setHookFunction = (value: string) => void

export default (selectedPriceRange: string, setSelectedPriceRange: setHookFunction) => {

  let handleClick = (range: string) => {
      setSelectedPriceRange(range)
  }

  return (
    <div>
      <p className="select-text">SELECT PRICE RANGE</p>
      {pricesRange.map((priceRange,idx) => <button key={idx} className="select-price-button margin_0_10">{priceRange.bottom + ' - ' + priceRange.top}</button>)}
    </div>
  );
}