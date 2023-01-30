/*
Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function
which calculates value or values of a quadratic equation, solveQuadEquation.
*/

function solveQuadEquation(a,b,c){
    let det = (b*b)-(4*a*c);
    let root1
    let root2
    if(det > 0){
        root1 = (-(b) + Math.sqrt(det))/(2*a);
        root2 = (-(b) + Math.sqrt(det))/(2*a);
        console.log('Value of root1:',root1,'\nValue of root2:',root2);
    }
    else if(det == 0){
        root1=root2= -(b)/(2*a);
        console.log('Value of root1:',root1,'\nValue of root2:',root2);
    }
    else{
        let real = -(b)/(2*a);
        let img = Math.sqrt(-(det))/(2*a);
        console.log('Value of root1:',real+img,'\nValue of root2:',real-img);
    }
}

let a=8,b=-4,c=-2;
solveQuadEquation(a,b,c);