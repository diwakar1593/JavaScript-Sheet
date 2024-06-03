/* 
 Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
*/
let myAge = 24
let yourAge = 30      //prompt("Enter your age : ","numbers goes here")
if(myAge > yourAge ){
    console.log('I am',(myAge - yourAge), 'years older than you.')
}
else{
    console.log('You are',(yourAge - myAge), 'years older than me.')
}