/* Add name, legs, color, age and bark properties for the dog object. The bark
property is a method which return woof woof.
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

console.log(dog)