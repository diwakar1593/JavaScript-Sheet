/*
Write a function arrayOfRgbColors which return any number of RGB colors in an
array.
*/

function arrayOfRgbColors(noOfRgbColor){
    const color=[]
    for(let i=0; i<noOfRgbColor; i++){
        var front = 'rgb('
        var end= ')'
        var rgb = front+(Math.floor(Math.random() * 255) + 1)+","+(Math.floor(Math.random() * 255))+","+(Math.floor(Math.random() * 255))+end;
        color.push(rgb);
    }
    return color;
}

let a = 6;
const color = arrayOfRgbColors(a);
console.log(color);