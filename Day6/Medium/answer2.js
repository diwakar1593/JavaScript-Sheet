//Write a script which generates a random hexadecimal number.

var num = Math.floor(Math.random() * 10000) + 1;
let hexStr = num.toString(16);
console.log('#'+hexStr);