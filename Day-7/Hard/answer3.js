//Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

function arrayOfHexaColors(noOfColor){
    const color=[]
    for(let i=0; i<noOfColor; i++){
        var result ='#';
        for(let i=0;i<6;i++){
            result += Math.floor(Math.random()*16).toString(16);
        }
        color.push(result);
    }
    return color;
}
 let a = 6;
const color = arrayOfHexaColors(a);
console.log(color);