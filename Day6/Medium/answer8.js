/*
In above countries array, check if there is a country or countries end with a
substring 'ia'. If there are countries end with, print it as array. If there is
no country containing the word 'ai', print 'These are countries ends without
ia'.
['Albania', 'Bolivia','Ethiopia']
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
    if(countries[i].includes('ia')){
        arr_land.push(countries[i]);
        count++;
    }
}
if(count>0){
    console.log("Countries are ends with ia :",arr_land);
}
else{
    console.log('These are countries ends without ia:',countries);
}