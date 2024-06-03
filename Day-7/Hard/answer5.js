/*
Write a function convertHexaToRgb which converts hexa color to rgb and it
returns an rgb color.
 */

function convertHexaToRgb(hex){
    if(hex.length==4){
        let r = hex.slice(1,2);
        let g = hex.slice(2,3);
        let b = hex.slice(3,4);

        r = parseInt(r + r, 16);
        g = parseInt(g + g, 16);
        b = parseInt(b + b, 16);
        return {r,g,b};
    }
    else if(hex.length==7){
        let r = hex.slice(1,3);
        let g = hex.slice(3,5);
        let b = hex.slice(5,7);

        r = parseInt(r, 16);
        g = parseInt(g, 16);
        b = parseInt(b, 16);
        return {r,g,b};
    }
}

let rgb = convertHexaToRgb('#f3ff3f');
console.log(rgb);