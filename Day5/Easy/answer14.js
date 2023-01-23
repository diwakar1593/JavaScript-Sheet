/* Filter out companies which have more than one 'o' without the filter method.*/

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

for(let i=0; i<itCompanies.length; i++){
    let count = 0;
    for(let j = 0; j<itCompanies[i].length; j++){
        if(itCompanies[i][j] === 'o'){
            count++;
        }
    }
    if(count>1){
        console.log(itCompanies[i]);
    }
}