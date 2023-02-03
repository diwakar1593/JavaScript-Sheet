/*
Write a function convertRgbToHexa which converts rgb to hexa color and it
returns an hexa color.
*/

function convertToHexa(x){
    var hex = x.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function convertRgbToHexa(r,g,b){
    return "#" + convertToHexa(r) + convertToHexa(g) + convertToHexa(b);
}

let hexColor = convertRgbToHexa(45,51,255);
console.log(hexColor);