/*
. A volume of a rectangular prism is calculated as follows: volume = length x
width x height. Write a function which calculates volumeOfRectPrism.
*/

function volumeOfRectPrism(length, width, height){
    let volume = length * width * height;
    return volume;
}

console.log('Volume of a Rectangular prism:',volumeOfRectPrism(10,20,10));