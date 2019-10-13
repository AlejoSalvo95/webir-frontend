import React, { useState } from 'react';
import SelectDevice from './SelectDevice'
import SelectModel from './SelectModel'
import {selectDevice, selectModel} from '../Utils/constants'
import './SelectionStyles.css';

export default () => {
    // Declara una nueva variable de estado, la cual llamaremos “count”
    const [shownComponent, setShownComponent] = useState('SelectDevice');
    const [selectedDevice, setSelectedDevice] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
  
    let changeSelectedModel = (model: string) => {
      setSelectedModel(model)
    }
    let changeSelectedDevice = (device: string) => {
      setSelectedDevice(device)
    }
    let changeShownComponent = (component: string) => {
      setShownComponent(component)
    }
    return (
      <div>
        {shownComponent === selectDevice ?  SelectDevice(changeSelectedDevice, changeShownComponent) : 
        shownComponent === selectModel ? SelectModel(selectedDevice, changeSelectedModel, changeShownComponent) : 'Nada'}
      </div>
    );
}