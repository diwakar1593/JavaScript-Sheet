//Find the longest word in the webTechs array.


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

var len =0;
var index =0;
for(let i=0; i<webTechs.length;  i++){
    if(webTechs[i].length>len){
        len = webTechs[i].length;
        index = i;
    }
}
console.log(webTechs[index]);