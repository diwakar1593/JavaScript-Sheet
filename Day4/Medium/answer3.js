/*
Check if a day is weekend day or a working day. Your script will take day as an input.
*/

let dayUserInput = 'sunday'   //prompt("What is the day today : ","day goes here")
let day = dayUserInput.toLowerCase()

switch (day) {
    case 'sunday':
        console.log(day,'is a weekend.')
        break
    case 'monday':
        console.log(day,'is a working day.')
        break
    case 'tuesday':
        console.log(day,'is a working day.')
        break
    case 'wednesday':
        console.log(day,'is a working day.')
        break
    case 'thursday':
        console.log(day,'is a working day.')
        break
    case 'friday':
        console.log(day,'is a working day.')
        break
    case 'saturday':
        console.log(day,'is a weekend.')
        break
    default:
        console.log('It is not a day of a week.')
}