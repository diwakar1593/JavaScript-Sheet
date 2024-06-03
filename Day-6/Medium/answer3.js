//Write a script which generates a random rgb color number.


function ranRNG(){
    var x = Math.floor(Math.random()*256);
    var y = Math.floor(Math.random()*256);
    var z = Math.floor(Math.random()*256);
    var RBGColor = "rbg(" +x+ ","+y+","+z+")";
    console.log(RBGColor);
}
ranRNG();