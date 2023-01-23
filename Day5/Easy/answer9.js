/* Print the first company, middle and last company.*/
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let firstCompany = itCompanies[0];
console.log(firstCompany);
let middleIndex = Math.floor(itCompanies.length/2);
let middleCompany = itCompanies[middleIndex];
console.log(middleCompany);
let lastIndex = itCompanies.length - 1;
let lastCompany = itCompanies[lastIndex];
console.log(lastCompany);