/*
If a is greater than b return 'a is greater than b' else 'a is less than b'.
Try to implement it in to ways
-> using if else
-> ternary operator
*/

let a = 20
let b = 30

// implementation using if else
if(a>b){
    console.log(a,'is greater than',b)
}
else{
    console.log(a,'is less than',b)
}

// implementation using ternary operator
a = 50
b = 20
let result = (a>b)
result
? console.log(a,'is greater than',b)
: console.log(a,'is less than',b)