// Set new properties the dog object: breed, getDogInfo

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

dog.breed = 'bulldog'
dog.getDogInfo = function(){
    let statement = `${this.name} is a ${this.color} dog of ${this.breed} breed.\nIt has ${this.legs} legs.`
    return statement;
}
console.log(dog.getDogInfo());