import React, { useState, useEffect } from "react";

import { Service, Phone } from "Utils/Types";

// Tutorial: https://dev.to/camilomejia/fetch-data-with-react-hooks-and-typescript-390c

/*
    body: {
        brand: 'apple' o 'samsung'
        lowest_price: 800
        highest_price: 1000
        memory: 64
    }
*/
export interface Phones {
  results: Phone[];
}

const useGetPhonesService = () => {
  const [result, setResult] = useState<Service<Phones>>({
    status: "loading"
  });

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
  useEffect(() => {
    fetch("http://localhost:1337/phones", sentData)
      .then(response => {
        console.log(response, "esa es la respuesta");
        return response.json();
      })
      .then(response => {
        console.log(response, "esa es la respuesta");
        return setResult({ status: "loaded", payload: response });
      })
      .catch(error => {
        console.log(error, "ese es la error");
        return setResult({ status: "error", error });
      });
  }, []);

  return result;
};

export default useGetPhonesService;
