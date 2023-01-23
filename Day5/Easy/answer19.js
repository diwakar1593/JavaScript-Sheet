/*  Slice out the middle IT company or companies from the array.*/

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

const middleIndex = Math.floor(itCompanies.length/2);
if(itCompanies.length%2 === 0){
    console.log(itCompanies.slice(middleIndex-1,middleIndex+1));
}
else{
    console.log(itCompanies[middleIndex]);
}