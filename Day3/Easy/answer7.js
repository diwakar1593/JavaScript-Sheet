/*
Use the Date object to do the following activities
1. What is the year today?
2. What is the month today as a number?
3. What is the date today?
4. What is the day today as a number?
5. What is the hours now?
6. What is the minutes now?
7. Find out the numbers of seconds elapsed from January 1, 1970 to now
*/
const now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth()+1)
console.log(now.getDate())
console.log(now.getDay()+1)
console.log(now.getHours())
console.log(now.getMinutes())
const allSeconds = Date.now()
console.log(allSeconds)