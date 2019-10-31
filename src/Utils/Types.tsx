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
interface ServiceLoaded<T> {
  status: "loaded";
  payload: T;
}
interface ServiceError {
  status: "error";
  error: Error;
}
export type Service<T> =
  | ServiceInit
  | ServiceLoading
  | ServiceLoaded<T>
  | ServiceError;

export type Phone = {
  imageUrl: string;
  name: string;
  price: string;
};
