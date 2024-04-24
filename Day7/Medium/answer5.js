// Declare a function name swapValues. This function swaps value of x to y.

function swapValues(x,y){
    let temp = x;
    x=y;
    y=temp;
    console.log('a:',x,'b:',y);
}

let a=4;
let b=5;
console.log('a:',a,'b:',b);
swapValues(a,b);