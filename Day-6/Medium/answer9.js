//Using the above countries array, find the country containing the biggest number of characters.

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

var len =0;
var index =0;
for(let i=0; i<countries.length;  i++){
    if(countries[i].length>len){
        len = countries[i].length;
        index = i;
    }
}
console.log(countries[index]);