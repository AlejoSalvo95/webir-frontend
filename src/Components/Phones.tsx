import React, { useState } from "react";
import Loader from "Loader";
import arrowSvg from "Utils/Assets/Images/white-arrow.svg";

export default () => {
  let phones = [
    {
      name: "iPhone XS",
      price: "1000usd",
      imgSrc:
        "https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg"
    },
    {
      name: "iPhone XS Pro",
      price: "1500usd",
      imgSrc:
        "https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg"
    },
    {
      name: "iPhone XS Mini",
      price: "500usd",
      imgSrc:
        "https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg"
    },
    {
      name: "iPhone XS Mini2",
      price: "500usd",
      imgSrc:
        "https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg"
    },
    {
      name: "iPhone XS Mini3",
      price: "500usd",
      imgSrc:
        "https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg"
    },
    {
      name: "iPhone XS Mini4",
      price: "500usd",
      imgSrc:
        "https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg"
    },
    {
      name: "iPhone XS Mini4",
      price: "500usd",
      imgSrc:
        "https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg"
    },
    {
      name: "iPhone XS Mini4",
      price: "500usd",
      imgSrc:
        "https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg"
    },
    { name: "iPhone XS Mini4", price: "500usd" },
    { name: "iPhone XS Mini5", price: "500usd" },
    { name: "iPhone XS Mini6", price: "500usd" }
  ];
  return (
    <div>
      <img src={arrowSvg} />
      <div className="big_padding_top">
        <p className="select-text">PHONES</p>
        <div className="flexcontainer">
          {phones.map((phone, ixd) => (
            <a href={phone.imgSrc} key={ixd} target="_blank">
              <div className="select-button">
                <img src={phone.imgSrc} />

                <p>{phone.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
