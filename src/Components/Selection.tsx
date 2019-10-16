import React, { useState } from 'react';
import SelectDevice from './SelectDevice'
import SelectBrand from './SelectBrand'

import {selectDevice, selectBrand} from 'Utils/constants'
import { selectBrandPropsType } from 'Utils/Types'

import './SelectionStyles.css';

export default () => {
    // Declara una nueva variable de estado, la cual llamaremos “count”
    const [shownComponent, setShownComponent] = useState('SelectDevice');
    const [selectedDevice, setSelectedDevice] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedPriceRange, setSelectedPriceRange] = useState('');
  
    let changeSelectedBrand = (brand: string) => {
      setSelectedBrand(brand)
    }
    let changeSelectedDevice = (device: string) => {
      setSelectedDevice(device)
    }
    let changeShownComponent = (component: string) => {
      setShownComponent(component)
    }
    let selectBrandProps: selectBrandPropsType = {
      selectedPriceRange,
      setSelectedPriceRange,
      selectedDevice,
      changeSelectedBrand,
      changeShownComponent,
    }
    return (
      <div>
        {shownComponent === selectDevice ?  SelectDevice(changeSelectedDevice, changeShownComponent) : 
        shownComponent === selectBrand ? <SelectBrand {...selectBrandProps}  /> : ''}
      </div>
    );
}