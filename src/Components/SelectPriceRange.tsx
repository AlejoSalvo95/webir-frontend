import React, { useState } from 'react';
import {computer, phone, prices} from '../Utils/constants'

type setHookFunction = (value: string) => void

export default (selectedPriceRange: string, setSelectedPriceRange: setHookFunction) => {

  let handleClick = (range: string) => {
      setSelectedPriceRange(range)
  }

  return (
    <div>
      <p className="select-text">SELECT PRICE RANGE</p>
      <span>Between</span>
      <select>
        {prices.map(price => <option value={price}>{price}</option>)}
      </select>
      <span>and</span>
      <select>
        {prices.map(price => <option value={price}>{price}</option>)}
      </select>
    </div>
  );
}