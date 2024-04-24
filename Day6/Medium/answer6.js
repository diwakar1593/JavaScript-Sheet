/*
Use the countries array to create the following array of arrays:
[
['Albania', 'ALB', 7],
['Bolivia', 'BOL', 7],
['Canada', 'CAN', 6],
['Denmark', 'DEN', 7],
['Ethiopia', 'ETH', 8],
['Finland', 'FIN', 7],
['Germany', 'GER', 7],
['Hungary', 'HUN', 7],
['Ireland', 'IRE', 7],
['Iceland', 'ICE', 7],
['Japan', 'JAP', 5],
['Kenya', 'KEN', 5]
]
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

const arr = [[]]
for(let j=0; j<countries.length; j++){
for(let i=0; i<countries.length; i++){
    arr[i].push(countries[i]);
    arr[i].push(countries[i].slice(0,4).toUpperCase());
    arr[i].push(countries[i].length);
}}
console.log(arr);