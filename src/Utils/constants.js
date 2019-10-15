import laptopSvg from './Assets/Images/laptop.svg';
import phoneSvg from './Assets/Images/phone.svg';
import appleSvg from './Assets/Images/apple.svg';
import windowsSvg from './Assets/Images/windows.svg';

export const selectDevice = 'SelectDevice'
export const selectBrand = 'SelectBrand'
export const computer = {
    text: 'Computer',
    imgSrc: laptopSvg,
}

export const phone = {
    text: 'Phone',
    imgSrc: phoneSvg,
}

export const phoneBrands = [{text:'Samsung', imgSrc: ""},{text:'Iphone', imgSrc:"imgSrc"} ]
export const computerBrands = [{text:'Windows', imgSrc: windowsSvg},{text:'Mac', imgSrc:appleSvg} ]

export const priceRange = [
    { bottom: 200, top: 400},
    { bottom: 400, top: 600},
    { bottom: 600, top: 800},
    { bottom: 800, top: 1000},
]

export const prices = [200, 400, 600, 800, 1000]