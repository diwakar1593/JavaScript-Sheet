//This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

const fruit = ['banana', 'orange', 'mango', 'lemon'];

let i = 0;
let j = fruit.length-1;
while(i<j){
    var temp = fruit[i];
    fruit[i]=fruit[j];
    fruit[j]=temp;
    i++;
    j--;
}

console.log(fruit);