export type setHookFunctionString = (value: string) => void;
export type setHookFunctionNumber = (value: number) => void;
export type setHookFunctionPriceRange = (value: PriceRange) => void;

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
export type PriceRange = {
  lowest: number;
  highest: number;
  text: string;
};
export type Brand = "apple" | "samsung";
export interface ServiceSuccess {
  status: "success";
  payload: Phones;
}
export interface ServiceError {
  status: "error";
  error: Error;
}
export type Phone = {
  imageUrl: string;
  name: string;
  price: string;
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
export type ServiceFunction = (
  params: PhoneQuery
) => Promise<ServiceSuccess | ServiceError>;
export type phoneResponseType = ServiceSuccess | ServiceError | undefined;
