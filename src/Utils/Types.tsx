export type setHookFunction = (value: string) => void;
export type selectBrandPropsType = {
  selectedPriceRange: string;
  setSelectedPriceRange: setHookFunction;
  changeSelectedBrand: setHookFunction;
  changeShownComponent: setHookFunction;
};
