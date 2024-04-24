/* Remove the middle IT company from the array.*/

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompanies.splice(Math.floor(itCompanies.length/2),1);
console.log(itCompanies);