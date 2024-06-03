/*
 Circumference of a circle is calculated as follows: circumference = 2πr. Write
a function which calculates circumOfCircle.
*/

function circumOfCircle(r){
    let pi = 3.14;
    let circumference = 2 * pi * r;
    return circumference;
}

console.log('Circumference of Circle:',circumOfCircle(5));