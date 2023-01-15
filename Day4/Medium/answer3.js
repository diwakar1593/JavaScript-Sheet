/*
Check if a day is weekend day or a working day. Your script will take day as an input.
*/

let dayUserInput = 'saturday'   //prompt("What is the day today : ","day goes here")
let day = dayUserInput.toLowerCase()

switch (day) {
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(day,'is a working day.')
        break
    case 'saturday':
    case 'sunday':
        console.log(day,'is a weekend.')
        break
    default:
        console.log('It is not a day of a week.')
}