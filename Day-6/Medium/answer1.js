// Develop a small script which generate any number of characters random id:

function makeid(l){
    var id = ""
    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for(let i=0; i<l; i++){
        id += char_list.charAt(Math.floor(Math.random()*char_list.length));
    }
    return id;
}

var l = 10 //prompt("Enter length of id : ","numbers goes here")
console.log(makeid(l));