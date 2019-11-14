import React, { ReactNode } from "react";
import arrowSvg from "Utils/Assets/Images/white-arrow.svg";
import { Phone, phonePropsType, keyGetterType } from "Utils/Types";
import { capitalize, groupBy } from "Utils/GeneralFunctions";
export default ({ resetSetPhoneResponse, phonesData }: phonePropsType) => {
  let actualPhones: Phone[] = [
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone 8 64GB Silver",
      link:
        "www.zonatecno.com.uy/productos/92516/Celular%20Apple%20iPhone%208%2064GB%20Silver",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celulares_Apple_iPhone_8_64GB_Silver_tab_1.png",
      price: "955.00",
      memory: "64",
      model: "iphone 8",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone XS Max 256GB Silver",
      link:
        "www.zonatecno.com.uy/productos/94180/Celular%20Apple%20iPhone%20XS%20Max%20256GB%20Silver",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celular_Apple_iPhone_XS_Max_256GB_Silver_tab_1.png",
      price: "1799.00",
      memory: "256",
      model: "iphone xs max",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone 8 Plus 256GB Silver",
      link:
        "www.zonatecno.com.uy/productos/92524/Celular%20Apple%20iPhone%208%20Plus%20256GB%20Silver",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celulares_Apple_iPhone_8_Plus_256GB_Silver_tab_1.png",
      price: "1575.00",
      memory: "256",
      model: "iphone 8 plus",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone XS Max 64GB Space Gray",
      link:
        "www.zonatecno.com.uy/productos/94175/Celular%20Apple%20iPhone%20XS%20Max%2064GB%20Space%20Gray",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celular_Apple_iPhone_XS_Max_64GB_Space_Gray_tab_1.png",
      price: "1589.00",
      memory: "64",
      model: "iphone xs max",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone 8 Plus 64GB Silver",
      link:
        "www.zonatecno.com.uy/productos/92501/Celular%20Apple%20iPhone%208%20Plus%2064GB%20Silver",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celulares_Apple_iPhone_8_Plus_64GB_Silver_tab_1.png",
      price: "1299.00",
      memory: "64",
      model: "iphone 8 plus",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone XS 256GB Space Gray",
      link:
        "www.zonatecno.com.uy/productos/94171/Celular%20Apple%20iPhone%20XS%20256GB%20Space%20Gray",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celular_Apple_iPhone_XS_256GB_Space_Gray_tab_1.png",
      price: "1909.00",
      memory: "256",
      model: "iphone xs",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone 7 32GB Black",
      link:
        "www.zonatecno.com.uy/productos/90798/Celular%20Apple%20iPhone%207%2032GB%20Black",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celulares_Apple_iPhone_7_32GB_Negro_tab_1.png",
      price: "729.00",
      memory: "32",
      model: "iphone 7",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone 11 Pro 64GB 4GB Silver",
      link:
        "www.zonatecno.com.uy/productos/95959/Celular%20Apple%20iPhone%2011%20Pro%2064GB%204GB%20Silver",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celular_Apple_iPhone_11_Pro_64GB_4GB_Silver_tab_1.png",
      price: "1989.00",
      memory: "64",
      model: "iphone 11 pro",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone XR 128GB Black",
      link:
        "www.zonatecno.com.uy/productos/94433/Celular%20Apple%20iPhone%20XR%20128GB%20Black",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celular_Apple_iPhone_XR_128GB_Black_tab_1.png",
      price: "1299.00",
      memory: "128",
      model: "iphone xr",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone XS Max 64GB Silver",
      link:
        "www.zonatecno.com.uy/productos/94178/Celular%20Apple%20iPhone%20XS%20Max%2064GB%20Silver",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celular_Apple_iPhone_XS_Max_64GB_Silver_tab_1.png",
      price: "1589.00",
      memory: "64",
      model: "iphone xs max",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone 8 256GB Silver",
      link:
        "www.zonatecno.com.uy/productos/92520/Celular%20Apple%20iPhone%208%20256GB%20Silver",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celulares_Apple_iPhone_8_256GB_Silver_tab_1.png",
      price: "1189.00",
      memory: "256",
      model: "iphone 8",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone 11 Pro 256GB 4GB Silver",
      link:
        "www.zonatecno.com.uy/productos/95957/Celular%20Apple%20iPhone%2011%20Pro%20256GB%204GB%20Silver",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celular_Apple_iPhone_11_Pro_256GB_4GB_Silver_tab_1.png",
      price: "2259.00",
      memory: "256",
      model: "iphone 11 pro",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone XR 64GB White",
      link:
        "www.zonatecno.com.uy/productos/94275/Celular%20Apple%20iPhone%20XR%2064GB%20White",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celular_Apple_iPhone_XR_64GB_White_tab_1.png",
      price: "1199.00",
      memory: "64",
      model: "iphone xr",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone 6 32GB Space Grey",
      link:
        "www.zonatecno.com.uy/productos/94238/Celular%20Apple%20iPhone%206%2032GB%20Space%20Grey",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celular_Apple_iPhone_6_32GB_Silver_tab_1.png",
      price: "429.00",
      memory: "32",
      model: "iphone 6",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone 7 128GB Gold",
      link:
        "www.zonatecno.com.uy/productos/96020/Celular%20Apple%20iPhone%207%20128GB%20Gold",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celular_Apple_iPhone_7_128GB_Gold_tab_1.png",
      price: "399.00",
      memory: "128",
      model: "iphone 7",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone 11 64GB 4GB White",
      link:
        "www.zonatecno.com.uy/productos/96015/Celular%20Apple%20iPhone%2011%2064GB%204GB%20White",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celular_Apple_IPhone_11_64GB_4GB_White_tab_1.png",
      price: "1399.00",
      memory: "64",
      model: "iphone 11",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone XR 128GB Blue",
      link:
        "www.zonatecno.com.uy/productos/94277/Celular%20Apple%20iPhone%20XR%20128GB%20Blue",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celular_Apple_iPhone_XR_128GB_Blue_tab_1.png",
      price: "1299.00",
      memory: "128",
      model: "iphone xr",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone 8 64GB Space Gray",
      link:
        "www.zonatecno.com.uy/productos/92518/Celular%20Apple%20iPhone%208%2064GB%20Space%20Gray",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celulares_Apple_iPhone_8_64GB_Black_tab_1.png",
      price: "955.00",
      memory: "64",
      model: "iphone 8",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone 7 32GB Silver",
      link:
        "www.zonatecno.com.uy/productos/96019/Celular%20Apple%20iPhone%207%2032GB%20Silver",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celular_Apple_iPhone_7_32GB_Silver_tab_1.png",
      price: "369.00",
      memory: "32",
      model: "iphone 7",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone XS 64GB Gold",
      link:
        "www.zonatecno.com.uy/productos/94167/Celular%20Apple%20iPhone%20XS%2064GB%20Gold",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celular_Apple_iPhone_XS_64GB_Gold_tab_1.png",
      price: "1509.00",
      memory: "64",
      model: "iphone xs",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone 8 Plus 256GB Gold",
      link:
        "www.zonatecno.com.uy/productos/92523/Celular%20Apple%20iPhone%208%20Plus%20256GB%20Gold",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celulares_Apple_iPhone_8_Plus_256GB_Gold_tab_1.png",
      price: "1575.00",
      memory: "256",
      model: "iphone 8 plus",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone 8 Plus 256GB Space Gray",
      link:
        "www.zonatecno.com.uy/productos/92522/Celular%20Apple%20iPhone%208%20Plus%20256GB%20Space%20Gray",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celulares_Apple_iPhone_8_Plus_256GB_Black_tab_1.png",
      price: "1575.00",
      memory: "256",
      model: "iphone 8 plus",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone 11 Pro Max 256GB 4GB Midnight Green",
      link:
        "www.zonatecno.com.uy/productos/96030/Celular%20Apple%20iPhone%2011%20Pro%20Max%20256GB%204GB%20Midnight%20Green",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celular_Apple_iPhone_11_Pro_Max_256GB_4GB_Midnight_Green_tab_1.png",
      price: "2639.00",
      memory: "256",
      model: "iphone 11 pro max",
      page: "zonaTecno"
    }
  ];
  let keyGetter: keyGetterType = item => item.model
  let groupedPhones = groupBy(actualPhones, keyGetter)
  let showingPhones: ReactNode[] = []
  Object.keys(groupedPhones).forEach(function (key, idx) {
    let phones = groupedPhones[key];
    if (phones && phones.length) {
      console.log(phones, 'phones')

      let phone = phones[0];
      showingPhones.push(<div key={idx} className="shown-phone" >
        <img src={phone.image} alt="Phone" />
        <p>
          {capitalize(phone.model) +
            (phone.memory ? " " + phone.memory + "gb" : "")}
        </p>
        <p className="phone-price">USD {phone.price}</p>
        <div className="phone-link">
          <a href={phone.link} target="_blank">
            Open {phone.page}
          </a>
        </div>
      </div>)
    }
  })
  return (
    <div>
      <div className="big_padding_top">
        <img
          className="arrow-back"
          src={arrowSvg}
          onClick={resetSetPhoneResponse}
        />
        <span className="select-text">PHONES</span>
        <div className="margin_20_0_0_0 flexcontainer">
          {
            showingPhones
          }
        </div>
      </div>
    </div >
  );
};
