import React, { useState, useEffect } from "react";

import { PhoneQuery, ServiceFunction } from "Utils/Types";

// Tutorial: https://dev.to/camilomejia/fetch-data-with-react-hooks-and-typescript-390c

/*
    body: {
        brand: 'apple' o 'samsung'
        lowest_price: 800
        highest_price: 1000
        memory: 64
    }
*/

let header = new Headers({
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "multipart/form-data"
});
type sendDataType = {
  method: string;
  mode: "cors" | "navigate" | "same-origin" | "no-cors";
  header: Headers;
  dataType: string;
  body?: string;
};
let sentData: sendDataType = {
  method: "GET",
  mode: "cors",
  header: header,
  dataType: "jsonp"
};

const getPhonesService: ServiceFunction = (params: PhoneQuery) => {
  console.log(params, 'params en getPhonesService')
  const url = "http://localhost:1337/phones?brand=" + params.brand + "&memory=" + params.memory + "&lowest_price=" + params.lowest_price + "&highest_price=" + params.highest_price
  console.log('url', url)
  return new Promise((resolve, reject) => {
    fetch(url, sentData)
      .then(response => {
        console.log(response, "esa es la respuesta no jsoneada");
        return response.json();
      })
      .then(response => {
        console.log(response, "esa es la respuesta posta");
        resolve({ status: "success", payload: response });
      })
      .catch(error => {
        console.log(error, "ese es la error");
        reject({ status: "error", error });
      });
  })
};

export default getPhonesService;
