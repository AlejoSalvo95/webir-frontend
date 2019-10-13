import React, { useState } from 'react';
import {computer, phone} from '../Utils/constants'

type setHookFunction = (value: string) => void

export default (setSelectedDevice: setHookFunction, setShownComponent: setHookFunction) => {

    let handleClick = (device: string) => {
        setSelectedDevice(device)
        setShownComponent('SelectModel')
    }

    return (
      <div>
        <p className="select-text">SELECT DEVICE</p>
        <button className="select-button" onClick={() => handleClick(computer.text)}>
          <img src={computer.imgSrc}></img>
          <p>{computer.text}</p>
        </button>
        <button className="select-button" onClick={() => handleClick(phone.text)}>
          <img src={phone.imgSrc}></img>
          <p>{phone.text}</p>
        </button>
      </div>
    );
}