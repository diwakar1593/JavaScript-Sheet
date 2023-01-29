/*
Speed is calculated by dividing the total distance covered by a moving object
divided by the total amount of time taken. Write a function which calculates a
speed of a moving object, speed.
*/

function speed(distance,time){
    let speed = distance/time;
    return speed;
}

console.log('Speed of a Object:',speed(100,2.5));