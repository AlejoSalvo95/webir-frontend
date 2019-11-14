import phoneSvg from "./Assets/Images/phone.svg";
import appleSvg from "./Assets/Images/apple.svg";
import samsungSvg from "./Assets/Images/samsung.svg";

// let phones = [{model: "iphone 6", page: "zonalaptop", price:9}, {model: "iphone 6", page: "zonaTecno", price:8}, {model: "iphone 7", page: "zonaTecno", price:7}]

let keyGetter = item => item.model
export const groupBy = (list, keyGetter) => {
  let groupedPhones = {};
  list.forEach((item) => {
    const key = keyGetter(item);
    console.log(key)
    console.log(groupedPhones[key])
    if (!groupedPhones[key] || !groupedPhones[key].length) {
      groupedPhones[key] =[item];
    } else {
      groupedPhones[key].push(item);
    }
  });
}

// groupBy(phones, keyGetter)


export const phone = {
  text: "Phone",
  imgSrc: phoneSvg
};

export const phoneBrands = [
  { text: "samsung", imgSrc: samsungSvg },
  { text: "apple", imgSrc: appleSvg }
];

export const pricesRange = [
  { lowest: 200, highest: 500, text: "200 - 500" },
  { lowest: 500, highest: 800, text: "500 - 800" },
  { lowest: 800, highest: 1100, text: "800 - 1100" },
  { lowest: 1100, highest: 50000, text: "1100 - 50000" }
];

export const memorySizes = [32, 64, 128, 256];

export const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};
