/*
Create a human readable time format using the Date time object
1. YYYY-MM-DD HH:mm
2. DD-MM-YYYY HH:mm
3. DD/MM/YYYY HH:mm
*/
const now = new Date()
const year = now.getFullYear()
const month = now.getMonth() + 1
const date = now.getDate() 
const hours = now.getHours() 
const minutes = now.getMinutes() 
console.log(`${year}-${month}-${date} ${hours}:${minutes}`)         //YYYY-MM-DD HH:mm
console.log(`${date}-${month}-${year} ${hours}:${minutes}`)         //DD-MM-YYYY HH:mm
console.log(`${date}/${month}/${year} ${hours}:${minutes}`)         //DD/MM/YYYY HH:mm 