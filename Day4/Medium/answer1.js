/*
Write a code which can give grades to students according to theirs scores:
-> 90-100, A
-> 80-89, B
-> 70-79, C
-> 60-69, D
-> 50-59, E
-> 0-49, F
*/

let score = 88      //prompt("Enter the score : ","score goes here")

if(score >= 90){
    console.log('Your score is',score,'and grade is A');
}
else if(score >= 80){
    console.log('Your score is',score,'and grade is B');
}
else if(score >= 70){
    console.log('Your score is',score,'and grade is C');
}
else if(score >= 60){
    console.log('Your score is',score,'and grade is D');
}
else if(score >= 50){
    console.log('Your score is',score,'and grade is E');
}
else if(score >= 0){
    console.log('Your score is',score,'and grade is F');
}
else{
    console.log('You have entered invalid score.');
}
