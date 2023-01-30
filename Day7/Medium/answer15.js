//Write a function which generates a randomUserIp.


function randomUserIp(){
    var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
    return ip;
}

console.log(randomUserIp());