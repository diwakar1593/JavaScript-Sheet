/*
 Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250
let yourAge = 25
I am 225 years older than you.
 */

let myAge = 250
let yourAge = 275         //prompt("Enter your age : ","numbers goes here")
if(myAge > yourAge){
    console.log('I am '+ (myAge - yourAge) + ' years older than you')
}
else{
    console.log('I am '+ (yourAge - myAge) + ' years younger than you') 
}