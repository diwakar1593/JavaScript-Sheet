//Write a function name rgbColorGenerator and it generates rgb colors.


function rgbColorGenerator(){
    var rgb = (Math.floor(Math.random() * 255) + 1)+","+(Math.floor(Math.random() * 255))+","+(Math.floor(Math.random() * 255));
console.log('rgb(',rgb,')')
}

rgbColorGenerator();