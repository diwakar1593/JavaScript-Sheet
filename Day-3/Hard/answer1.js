/*
Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/
const now = new Date();
const year = now.getFullYear();
const month = ('0'+(now.getMonth()+1)).slice(-2) ;
const date = ('0'+now.getDate()).slice(-2);
const hour = ('0'+now.getHours()).slice(-2);
const minutes = ('0'+now.getMinutes()).slice(-2);

console.log(`${year}-${month}-${date} ${hour}:${minutes}`);
