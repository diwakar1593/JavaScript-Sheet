/*
 Density of a substance is calculated as follows:density= mass/volume. Write a
function which calculates density.
*/

function density(mass,volume){
    let density = mass/volume;
    return density;
}

console.log('Density of a substance:',density(5,100));