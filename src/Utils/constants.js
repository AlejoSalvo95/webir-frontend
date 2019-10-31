import phoneSvg from "./Assets/Images/phone.svg";
import appleSvg from "./Assets/Images/apple.svg";
import samsungSvg from "./Assets/Images/samsung.svg";

export const phone = {
  text: "Phone",
  imgSrc: phoneSvg
};

export const phoneBrands = [
  { text: "Samsung", imgSrc: samsungSvg },
  { text: "Iphone", imgSrc: appleSvg }
];

export const pricesRange = [
  { bottom: 200, top: 400, text: "200 - 400" },
  { bottom: 400, top: 600, text: "400 - 600" },
  { bottom: 600, top: 800, text: "600 - 800" },
  { bottom: 800, top: 1000, text: "800 - 1000" }
];

export const prices = [200, 400, 600, 800, 1000];

export const memorySizes = ["32gb", "64gb", "128gb", "256gb"];
