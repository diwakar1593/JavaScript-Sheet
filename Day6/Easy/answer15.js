//Develop a small script which generate a six characters random id:

var id = ""
var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

for(let i=0; i<6; i++){
    id += char_list.charAt(Math.floor(Math.random()*char_list.length));
}
console.log(id);