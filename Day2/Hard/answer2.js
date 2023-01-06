const string = 'You cannot end a sentence with because because because is a conjunction'
var ptrn = /because/g
console.log(string.match(ptrn).length)