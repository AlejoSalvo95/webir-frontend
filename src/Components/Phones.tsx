import React, { useState } from "react";
import Loader from "Loader";
import arrowSvg from "Utils/Assets/Images/white-arrow.svg";
import { Phone, phonePropsType } from "Utils/Types";
import { capitalize } from "Utils/constants";
export default ({ resetSetPhoneResponse, phonesData }: phonePropsType) => {
  let actualPhones: Phone[] = [
    {
      _index: "celulares",
      _type: "apple",

      description: "Carcasa Cartoon Pattern para iPhone 6 Plus",
      link:
        "https://zonalaptop.com.uy/catalogo/carcasa-cartoon-pattern-para-iphone-6-plus_880000013329_001",
      image:
        "https://d3ftwefqlweqlo.cloudfront.net/web/img/iconos/sale.svg?1539804668",
      price: "14.01",
      model: "iphone 6 plus",
      page: "zonalaptop"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple IPhone SE 3A850LL/A 16Gb Gold O.Box",
      link:
        "https://zonalaptop.com.uy/catalogo/celular-apple-iphone-se-3a850ll-a-16gb-gold-o-box_888462817356_001",
      image:
        "https://d3ftwefqlweqlo.cloudfront.net/web/img/iconos/sale.svg?1539804668",
      price: "258.99",
      memory: "16",
      model: "iphone se",
      page: "zonalaptop"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Carcasa de Rolling Stones para iPhone 5/5S",
      link:
        "https://zonalaptop.com.uy/catalogo/carcasa-de-rolling-stones-para-iphone-5-5s_880000013367_001",
      image:
        "https://d3ftwefqlweqlo.cloudfront.net/web/img/iconos/sale.svg?1539804668",
      price: "9.00",
      model: "iphone 5",
      page: "zonalaptop"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Carcasa Joke Vintage Boner para iPhone 6",
      link:
        "https://zonalaptop.com.uy/catalogo/carcasa-joke-vintage-boner-para-iphone-6_880000013527_001",
      image:
        "https://d3ftwefqlweqlo.cloudfront.net/web/img/iconos/sale.svg?1539804668",
      price: "9.00",
      model: "iphone 6",
      page: "zonalaptop"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone 6S MKRD2/LLA 16G Silver O.Box",
      link:
        "https://zonalaptop.com.uy/catalogo/celular-apple-iphone-6s-mkrd2-lla-16g-silver-o-box_888462500500_001",
      image:
        "https://d3ftwefqlweqlo.cloudfront.net/web/img/iconos/sale.svg?1539804668",
      price: "299.00",
      memory: "16",
      model: "iphone 6s",
      page: "zonalaptop"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone 5S 4G LTE 16GB Space Gray",
      link:
        "https://zonalaptop.com.uy/catalogo/celular-apple-iphone-5s-4g-lte-16gb-space-gray_885909727445_001",
      image:
        "https://d3ftwefqlweqlo.cloudfront.net/web/img/iconos/sale.svg?1539804668",
      price: "269.00",
      memory: "16",
      model: "iphone 5s",
      page: "zonalaptop"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple IPhone SE MLLW2LL/A 16Gb S.Gra O.Box",
      link:
        "https://zonalaptop.com.uy/catalogo/celular-apple-iphone-se-mllw2ll-a-16gb-s-gra-o-box_888462733762_001",
      image:
        "https://d3ftwefqlweqlo.cloudfront.net/web/img/iconos/sale.svg?1539804668",
      price: "258.99",
      memory: "16",
      model: "iphone se",
      page: "zonalaptop"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Carcasa Joke Vintage Because Cats para iPhone 5/5S",
      link:
        "https://zonalaptop.com.uy/catalogo/carcasa-joke-vintage-because-cats-para-iphone-5-5s_880000013794_001",
      image:
        "https://d3ftwefqlweqlo.cloudfront.net/web/img/iconos/sale.svg?1539804668",
      price: "9.00",
      model: "iphone 5",
      page: "zonalaptop"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple Iphone 8 64gb MQ6K2LL/A",
      link:
        "https://zonalaptop.com.uy/catalogo/celular-apple-iphone-8-64gb-mq6k2ll-a_190198451736_001",
      image:
        "https://d3ftwefqlweqlo.cloudfront.net/web/img/iconos/sale.svg?1539804668",
      price: "679.00",
      memory: "64",
      model: "iphone 8",
      page: "zonalaptop"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Film Protector Privacidad para iPhone 5/5S",
      link:
        "https://zonalaptop.com.uy/catalogo/film-protector-privacidad-para-iphone-5-5s_880000013732_001",
      image:
        "https://d3ftwefqlweqlo.cloudfront.net/web/img/iconos/sale.svg?1539804668",
      price: "5.90",
      model: "iphone 5",
      page: "zonalaptop"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Carcasa Joke Vintage Love Pink para iPhone 5/5S",
      link:
        "https://zonalaptop.com.uy/catalogo/carcasa-joke-vintage-love-pink-para-iphone-5-5s_880000013503_001",
      image:
        "https://d3ftwefqlweqlo.cloudfront.net/web/img/iconos/sale.svg?1539804668",
      price: "9.00",
      model: "iphone 5",
      page: "zonalaptop"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Carcasa Joke Vintage Shut Up para iPhone 6",
      link:
        "https://zonalaptop.com.uy/catalogo/carcasa-joke-vintage-shut-up-para-iphone-6_880000013497_001",
      image:
        "https://d3ftwefqlweqlo.cloudfront.net/web/img/iconos/sale.svg?1539804668",
      price: "9.00",
      model: "iphone 6",
      page: "zonalaptop"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Carcasa Antigolpes para iPhone 6",
      link:
        "https://zonalaptop.com.uy/catalogo/carcasa-antigolpes-para-iphone-6_880000021645_001",
      image:
        "https://d3ftwefqlweqlo.cloudfront.net/web/img/iconos/sale.svg?1539804668",
      price: "39.00",
      model: "iphone 6",
      page: "zonalaptop"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Carcasa de Rolling Stones para iPhone 4/4S",
      link:
        "https://zonalaptop.com.uy/catalogo/carcasa-de-rolling-stones-para-iphone-4-4s_880000013398_001",
      image:
        "https://d3ftwefqlweqlo.cloudfront.net/web/img/iconos/sale.svg?1539804668",
      price: "10.00",
      model: "iphone 4",
      page: "zonalaptop"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple Iphone SE MLXJ2LL/A 16G R.Gold O.box",
      link:
        "https://zonalaptop.com.uy/catalogo/celular-apple-iphone-se-mlxj2ll-a-16g-r-gold-o-box_888462801669_001",
      image:
        "https://d3ftwefqlweqlo.cloudfront.net/web/img/iconos/sale.svg?1539804668",
      price: "269.00",
      memory: "16",
      model: "iphone se",
      page: "zonalaptop"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Case Antigolpes Otter Box para iPhone 5/5S RS",
      link:
        "https://zonalaptop.com.uy/catalogo/case-antigolpes-otter-box-para-iphone-5-5s-rs_880000012773_001",
      image:
        "https://d3ftwefqlweqlo.cloudfront.net/web/img/iconos/sale.svg?1539804668",
      price: "28.00",
      model: "iphone 5",
      page: "zonalaptop"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone 6S 64GB Space Gray",
      link:
        "www.zonatecno.com.uy/productos/9978/Celular%20Apple%20iPhone%206S%2064GB%20Space%20Gray",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celular_Apple_iPhone_6S_64GB_Space_Gray_tab_1.png",
      price: "469.00",
      memory: "64",
      model: "iphone 6s",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone 7 128GB Black",
      link:
        "www.zonatecno.com.uy/productos/91229/Celular%20Apple%20iPhone%207%20128GB%20Black",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celulares_Apple_iPhone_7_128GB_Black_tab_1.png",
      price: "889.00",
      memory: "128",
      model: "iphone 7",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone XS Max 256GB Gold",
      link:
        "www.zonatecno.com.uy/productos/94179/Celular%20Apple%20iPhone%20XS%20Max%20256GB%20Gold",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celular_Apple_iPhone_XS_Max_256GB_Gold_tab_1.png",
      price: "1799.00",
      memory: "256",
      model: "iphone xs max",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone XS 256GB Silver",
      link:
        "www.zonatecno.com.uy/productos/94172/Celular%20Apple%20iPhone%20XS%20256GB%20Silver",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celular_Apple_iPhone_XS_256GB_Silver_tab_1.png",
      price: "1699.00",
      memory: "256",
      model: "iphone xs",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone XS 64GB Silver",
      link:
        "www.zonatecno.com.uy/productos/94169/Celular%20Apple%20iPhone%20XS%2064GB%20Silver",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celular_Apple_iPhone_XS_64GB_Silver_tab_1.png",
      price: "1509.00",
      memory: "64",
      model: "iphone xs",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone XS 64GB Space Gray",
      link:
        "www.zonatecno.com.uy/productos/94168/Celular%20Apple%20iPhone%20XS%2064GB%20Space%20Gray",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celular_Apple_iPhone_XS_64GB_Space_Gray_tab_1.png",
      price: "1509.00",
      memory: "64",
      model: "iphone xs",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone 7 32GB Gold",
      link:
        "www.zonatecno.com.uy/productos/90765/Celular%20Apple%20iPhone%207%2032GB%20Gold",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celulares_Apple_iPhone_7_32GB_Dorado_tab_1.png",
      price: "729.00",
      memory: "32",
      model: "iphone 7",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone 7 32GB Rose Gold",
      link:
        "www.zonatecno.com.uy/productos/90848/Celular%20Apple%20iPhone%207%2032GB%20Rose%20Gold",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celulares_Apple_iPhone_7_32GB_Rose_Gold_tab_1.png",
      price: "799.00",
      memory: "32",
      model: "iphone 7",
      page: "zonaTecno"
    },
    {
      _index: "celulares",
      _type: "apple",

      description: "Celular Apple iPhone 8 64GB Gold",
      link:
        "www.zonatecno.com.uy/productos/92498/Celular%20Apple%20iPhone%208%2064GB%20Gold",
      image:
        "https://servicios.zonatecno.com.uy/productos/Celulares_Apple_iPhone_8_64GB_Gold_tab_1.png",
      price: "955.00",
      memory: "64",
      model: "iphone 8",
      page: "zonaTecno"
    },
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
          {phonesData.map((phone, ixd) => (
            <div className="shown-phone">
              <img src={phone.image} />
              <p>
                {capitalize(phone.model) +
                  (phone.memory ? " " + phone.memory + "gb" : "")}
              </p>
              <p className="phone-price">USD {phone.price}</p>
              <div className="phone-link">
                <a href={phone.link} key={ixd} target="_blank">
                  Open {phone.page}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
