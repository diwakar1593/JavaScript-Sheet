/*
Declare a function name randomHexaNumberGenerator. When this function is called
it generates a random hexadecimal number. The function return the hexadecimal
number.
*/

function randomHexaNumberGenerator(len) {
    const hex = '0123456789ABCDEF';
    let output = '';
    for (let i = 0; i < len; ++i) {
        output += hex.charAt(Math.floor(Math.random() * hex.length));
    }
    return output;
}

console.log(randomHexaNumberGenerator(6));