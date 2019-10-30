import React, { useState } from "react";
import Loader from "Loader";

export default () => {
  const [loading, setLoading] = useState(false);

  let handleClick = (device: string) => {
    console.log(loading, "loading");
    setLoading(true);
  };
  let phones = [
    { name: "iPhone XS", price: "1000usd" },
    { name: "iPhone XS Pro", price: "1500usd" },
    { name: "iPhone XS Mini", price: "500usd" }
  ];
  return (
    <div>
      {loading && Loader()}
      <div className="big_padding_top">
        <p className="select-text">SELECT BRAND</p>
        {phones.map((phone, ixd) => (
          <button
            key={ixd}
            className="select-button"
            onClick={() => handleClick(phone.price)}
          >
            <p>{phone.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
