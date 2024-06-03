/*
 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length +
width). Write a function which calculates perimeterOfRectangle.
*/

function perimeterOfRectangle(length,width){
    let perimeter = 2*(length + width);
    return perimeter;
}

console.log('Perimeter of Rectangle:',perimeterOfRectangle(10,20));