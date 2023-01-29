/*
 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) +
32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
*/

function convertCelsiusToFahrenheit(oC){
    let oF = (oC * 9/5) + 32;
    return oF;
}

console.log('Temperature in oF:',convertCelsiusToFahrenheit(37));