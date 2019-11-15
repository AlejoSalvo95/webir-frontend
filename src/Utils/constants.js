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
  { lowest: 0, highest: 9000, text: 'No range' },
  { lowest: 200, highest: 600 },
  { lowest: 600, highest: 1000 },
  { lowest: 1000, highest: 1400 },
  { lowest: 1400, highest: 3000, text: '1400 - *' },
];
export const memorySizes = [32, 64, 128, 256];

