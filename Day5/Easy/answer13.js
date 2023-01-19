/* Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.*/

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
let company = 'Microsoft'
let comp = company.toLowerCase()
if(comp == (itCompanies[0].toLowerCase())){
    console.log('Company is found.')
}
else if(comp == (itCompanies[1].toLowerCase())){
    console.log('Company is found.')
}
else if(comp == (itCompanies[2].toLowerCase())){
    console.log('Company is found.')
}
else if(comp == (itCompanies[3].toLowerCase())){
    console.log('Company is found.')
}
else if(comp == (itCompanies[4].toLowerCase())){
    console.log('Company is found.')
}
else if(comp == (itCompanies[5].toLowerCase())){
    console.log('Company is found.')
}
else if(comp == (itCompanies[6].toLowerCase())){
    console.log('Company is found.')
}
else{
    console.log('Company is not found.')
}