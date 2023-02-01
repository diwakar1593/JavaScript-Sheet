/*
Modify the userIdGenerator function. Declare a function name
userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs
using prompt(). One of the input is the number of characters and the second
input is the number of ids which are supposed to be generated.
*/

function userIdGeneratedByUser(len,NoID) {
    const char = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    for(let i=0; i<NoID;i++){
        let id = '';
    for (let i = 0; i < len; ++i) {
        id += char.charAt(Math.floor(Math.random() * char.length));
    }
    console.log(id);
}
}
userIdGeneratedByUser(7,6);