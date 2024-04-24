/*
Declare a function name evensAndOdds . It takes a positive integer as parameter
and it counts number of evens and odds in the number.
*/

function evensAndOdds(n){
    let even =0;
    let odd =0;
    for(let i=0; i<=n; i++){
        if(i%2==0){
            even++;
        }
        else{
            odd++;
        }
    }
    console.log('The number of odds are :',odd);
    console.log('The number of evens are :',even);
}

evensAndOdds(100);