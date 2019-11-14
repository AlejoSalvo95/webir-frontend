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
  { lowest: 200, highest: 500 },
  { lowest: 500, highest: 800 },
  { lowest: 800, highest: 1100 },
  { lowest: 1100, highest: 1500 },
  { lowest: 1500, highest: 9000 }
];
export const memorySizes = [32, 64, 128, 256];

