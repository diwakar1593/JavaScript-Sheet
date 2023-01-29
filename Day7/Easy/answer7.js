/*
Area of a circle is calculated as follows: area = π x r x r. Write a function
which calculates areaOfCircle.
*/

function areaOfCircle(r){
    let pi = 3.14;
    let area = pi * r * r;
    return area;
}

console.log('Area of Circle:',areaOfCircle(5));