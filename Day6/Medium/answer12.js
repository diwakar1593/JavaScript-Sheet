/*
 Use the webTechs array to create the following array of arrays:
[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node",
4],["MongoDB", 7]]
*/


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
    ]

const arr =[[]];

for(let i=0; i<webTechs.length; i++){
    arr.push(webTechs[i],webTechs[i].length);
}

console.log(arr)