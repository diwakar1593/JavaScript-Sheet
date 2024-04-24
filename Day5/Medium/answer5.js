/* 
In the webTechs array check if Sass exists in the array and if it exists print
'Sass is a CSS preprocess'. If it does not exist add Sass to the array and
print the array.
*/

const webTechs =[
    'HTML',
    'CSS',
    'JavaScript',
    'Node',
    'React',
    'MongoDB',
    'PHP',
    'Angular'
]

for(let i = 0; i < webTechs.length; i++){
    if(webTechs[i] === 'Sass'){
        console.log('Sass is a CSS preprocess');
        break;
    }
    if(i === webTechs.length - 1){
        webTechs.push('Sass');
    }
}