import phoneSvg from "./Assets/Images/phone.svg";
import appleSvg from "./Assets/Images/apple.svg";
import samsungSvg from "./Assets/Images/samsung.svg";

export const phone = {
  text: "Phone",
  imgSrc: phoneSvg
};

export const phoneBrands = [
  { text: "samsung", imgSrc: samsungSvg },
  { text: "apple", imgSrc: appleSvg }
];

export const pricesRange = [
  { lowest: 200, highest: 400, text: "200 - 400" },
  { lowest: 400, highest: 600, text: "400 - 600" },
  { lowest: 600, highest: 800, text: "600 - 800" },
  { lowest: 800, highest: 1000, text: "800 - 1000" }
];

export const memorySizes = [32, 64, 128, 256];
