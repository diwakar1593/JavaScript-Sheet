/**
In above countries array, check if there is a country or countries containing
the word 'land'. If there are countries containing 'land', print it as array.
If there is no country containing the word 'land', print 'All these countries
are without land'.
['Finland','Ireland', 'Iceland']
 */

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

var count = 0;
const arr_land = []
for(let i=0; i<countries.length; i++){
    if(countries[i].includes('land')){
        arr_land.push(countries[i]);
        count++;
    }
}
if(count>0){
    console.log("Countries are with land :",arr_land);
}
else{
    console.log('All these countries are without land:',countries);
}