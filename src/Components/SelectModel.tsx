import React, { useState } from 'react';
import {computer, computerModels, phone, phoneModels} from '../Utils/constants'

type setHookFunction = (value: string) => void

export default (selectedDevice: string, setSelectedDevice: setHookFunction, setShownComponent: setHookFunction) => {

    let handleClick = (device: string) => {
        setSelectedDevice(device)
        setShownComponent('SelectModel')
    }

    return (
      <div>
        <p className="select-text">SELECT MODEL</p>
        { selectedDevice === computer.text ? computerModels.map((computerModel,ixd) => 
        <button key={ixd} className="select-button">
          <img src={computerModel.imgSrc}/>
          <p>{computerModel.text}</p>
        </button>) :
        selectedDevice === phone.text ? phoneModels.map((phoneModel,ixd) =>
        <button key={ixd} className="select-button">
          <img src={phoneModel.imgSrc}/>
          <p>{phoneModel.text}</p>
          </button>) : 'There was an issue please reload page!'}

      </div>
    );
}