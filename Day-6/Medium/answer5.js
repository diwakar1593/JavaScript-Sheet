//Using the above countries array, create an array for countries length'.

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


    const arrlen = []
    for(let i=0; i<countries.length; i++){
        arrlen.push(countries[i].length);
    }
    console.log(arrlen);