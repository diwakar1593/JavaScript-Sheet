/*
Get name, legs, color, age and bark value from the dog object.
*/

function bark(){
    return 'woof woof';
}
const dog ={
    name : 'puppy',
    legs : 4,
    color : 'white',
    age : 5,
    bark : bark()
}

console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark);