/*
Write a function generateColors which can generate any number of hexa or rgb
colors.
*/

function hexaColors(noOfColor){
    const color=[]
    for(let i=0; i<noOfColor; i++){
        var result ='#';
        for(let i=0;i<6;i++){
            result += Math.floor(Math.random()*16).toString(16);
        }
        color.push(result);
    }
    return color;
}

function rgbColors(noOfColor){
    const color=[]
    for(let i=0; i<noOfColor; i++){
        var front = 'rgb('
        var end= ')'
        var rgb = front+(Math.floor(Math.random() * 255) + 1)+","+(Math.floor(Math.random() * 255))+","+(Math.floor(Math.random() * 255))+end;
        color.push(rgb);
    }
    return color;
}

function generateColors(s, n){           //s: string ,  n: no of times.
    if(s=='hexa'){
        const color = hexaColors(n);
        return color;
    }
    else if(s == 'rgb'){
        const color = rgbColors(n);
        return color;
    }
    else{
        return 'Invalid Input';
    }
}

console.log(generateColors('hexa', 3));
console.log(generateColors('rgb', 3));
console.log(generateColors('rgba', 3))