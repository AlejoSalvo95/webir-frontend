import laptopSvg from './Assets/Images/laptop.svg';
import phoneSvg from './Assets/Images/phone.svg';

export const selectDevice = 'SelectDevice'
export const selectModel = 'SelectModel'
export const computer = {
    text: 'Computer',
    imgSrc: laptopSvg,
}

export const phone = {
    text: 'Phone',
    imgSrc: phoneSvg,
}

export const phoneModels = [{text:'Samsung', imgSrc: ""},{text:'Iphone', imgSrc:"imgSrc"} ]
export const computerModels = [{text:'Windows', imgSrc:"Assets/Images/laptop.svg"},{text:'Mac', imgSrc:"imgSrc"} ]

export const priceRange = [
    { bottom: 100, top: 200},
    { bottom: 200, top: 300},
    { bottom: 300, top: 400},
    { bottom: 400, top: 500},
]