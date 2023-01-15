/*
Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
-> September, October or November, the season is Autumn.
-> December, January or February, the season is Winter
-> March, April or May, the season is Spring
-> June, July or August, the season is Summer
*/

let monthUserInput = 'October'   //prompt("Enter a month : ","month goes here")
let month = monthUserInput.toLowerCase()

switch (month) {
    case 'december':
    case 'january':
    case 'february':
        console.log('The season is Winter.')
        break
    case 'march':
    case 'april':
    case 'may':
        console.log('The season is Spring.')
        break
    case 'june':
    case 'july':
    case 'august':
        console.log('The season is Summer.')
        break
    case 'september':
    case 'october':
    case 'november':
        console.log('The season is Autumn.')
        break
    default:
        console.log('It is not a month of a year.')
}