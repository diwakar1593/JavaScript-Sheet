/*
Print all the elements of array as shown below.
const fullStack = [
['HTML', 'CSS', 'JS', 'React'],
['Node', 'Express', 'MongoDB']
]
HTML
CSS
JS
REACT
NODE
EXPRESS
MONGODB
*/

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
    ]

for(let i=0; i<fullStack.length; i++){
    for(let j=0; j<fullStack[i].length;j++){
        console.log(fullStack[i][j].toUpperCase());
    }
}