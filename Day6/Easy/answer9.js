// Use for loop to iterate from 0 to 100 and print only prime numbers.

let count=0
let i,j 
for(i=2;i<=100;i++)
{
for( j=1;j<=i;j++)
{
  if(i%j==0)
  count++
  
}

if(count==2)

console.log(i)
count=0


  
}