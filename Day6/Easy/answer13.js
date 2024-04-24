//Develop a small script which generate array of 5 random numbers

let arr =[]

for(let i=0; i<5; i++){
    arr[i]= Math.floor(Math.random()*100)+1;
}
console.log(arr);