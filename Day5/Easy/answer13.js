/* Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.*/

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
let company = 'Microsoft'
if(itCompanies.includes(company)){
    console.log(company);
}
else{
    console.log('Company is not found.');
}