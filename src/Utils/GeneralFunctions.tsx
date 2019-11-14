import { Phone, keyGetterType, groupedPhonesType } from "Utils/Types";

export const pricesRangeText = (lowest: number, highest: number) => lowest + ' - ' + highest

export const capitalize = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const groupBy = (list: Phone[], keyGetter: keyGetterType) => {
  let groupedPhones: groupedPhonesType = {};
  list.forEach((item) => {
    const key = keyGetter(item);
    if (!groupedPhones[key] || !groupedPhones[key].length) {
      groupedPhones[key] = [item];
    } else {
      groupedPhones[key].push(item);
    }
  });
  return groupedPhones
}