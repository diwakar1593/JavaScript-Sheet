/*
Write a function called checkSeason, it takes a month parameter and returns the
season:Autumn, Winter, Spring or Summer.
*/

function checkSeason(month){
    let mon = month.toLowerCase();
    switch (mon) {
        case 'december':
        case 'january':
        case 'february':
            return 'Winter';
        case 'march':
        case 'april':
        case 'may':
            return 'Spring';
        case 'june':
        case 'july':
        case 'august':
            return 'Summer';
        case 'september':
        case 'october':
        case 'november':
            return 'Autumn';
        default:
            return 'It is not a month of a year.';
}

}

console.log(checkSeason('June'));