export type setHookFunction = (value: string) => void
export type selectBrandPropsType = {
  selectedPriceRange: string,
  setSelectedPriceRange: setHookFunction,
  selectedDevice: string,
  changeSelectedBrand: setHookFunction,
  changeShownComponent: setHookFunction,
}