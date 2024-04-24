/*
 Using the above countries array, create the following new array.
["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY",
"HUNGARY", "IRELAND", "JAPAN", "KENYA"]

*/


const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
    ]


const toUpper = []
for(let i=0; i<countries.length; i++){
    toUpper.push(countries[i].toUpperCase());
}
console.log(toUpper);