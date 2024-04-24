//Using the above countries array, find the country containing only 5 characters.

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
    ]

var arr = [];
for(let i=0; i<countries.length;  i++){
    if(countries[i].length==5){
        arr.push(countries[i]);
    }
}
console.log(arr);