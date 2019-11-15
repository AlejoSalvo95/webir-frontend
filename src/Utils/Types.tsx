// FUNCTION TYPES
export type setHookFunctionString = (value: string) => void;
export type setHookFunctionNumber = (value: number) => void;
export type setHookFunctionPriceRange = (value: PriceRange) => void;
export type noParamsFunction = () => void;
export type phonePropsType = {
  resetSetPhoneResponse: noParamsFunction;
  phonesData: Phone[];
};
export type selectPriceRangePropsType = {
  selectedPriceRange: PriceRange;
  changeSelectedPriceRange: setHookFunctionPriceRange;
};
export type selectMemorySizePropsType = {
  selectedMemorySize: number;
  changeSelectedMemorySize: setHookFunctionNumber;
};
export type selectBrandPropsType = {
  selectedBrand: Brand;
  changeSelectedBrand: setHookFunctionString;
};

// SHOW PHONES TYPES
export type keyGetterType = (value: Phone) => string;
export type groupedPhonesType = {
  [key: string]: Phone[];
}

// PHONE QUERY TYPES
export type Phone = {
  _index: string;
  _type: string;
  description: string;
  link: string;
  image: string;
  price: string;
  memory?: string;
  model: string;
  page: string;
  pageExpensive?: string;
  priceExpensive?: string;
  linkExpensive?: string;
};
export interface Phones {
  data: Phone[];
}
export type PhoneQuery = {
  brand: Brand;
  lowest_price: number;
  highest_price: number;
  memory: number;
};
export interface ServiceSuccess {
  status: "success";
  payload: Phones;
}
export interface ServiceError {
  status: "error";
  error: Error;
}
export type ServiceFunction = (
  params: PhoneQuery
) => Promise<ServiceSuccess | ServiceError>;
export type phoneResponseType = ServiceSuccess | ServiceError | undefined;


// BASIC GENERAL TYPES
export type Brand = "apple" | "samsung";
export type PriceRange = {
  lowest: number;
  highest: number;
  text?: string;
};
