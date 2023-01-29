/*
Weight of a substance is calculated as follows: weight = mass x gravity. Write
a function which calculates weight.
*/

function weight(mass,gravity){
    let weight = mass * gravity;
    return weight;
}

console.log('Weight of a substance:',weight(5,9.8));