export type setHookFunction = (value: string) => void;
export type selectBrandPropsType = {
  selectedPriceRange: string;
  setSelectedPriceRange: setHookFunction;
  selectedMemorySize: string;
  setSelectedMemorySize: setHookFunction;
  changeSelectedBrand: setHookFunction;
  changeShownComponent: setHookFunction;
};
interface ServiceInit {
  status: "init";
}
interface ServiceLoading {
  status: "loading";
}
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
  brand: 'apple' | 'samsung'
  lowest_price: number;
  highest_price: number;
  memory: number
};
export type ServiceFunction = (params: PhoneQuery) => Promise<(ServiceSuccess | ServiceError)>