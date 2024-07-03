/*

- forEach is used to perform an action for each element of an array.
- map is used to create a new array with the results of a callback function performed on each element. 
- filter is used to create a new array with only the elements that pass a certain condition.
- reduce is used to accumulate a single value based on the elements of an array.

*/


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


const callback = n => {
    return n*n;
}


// countries.forEach(country => console.log(country));

// names.forEach(name => console.log(name));

// numbers.forEach(number => console.log(number));

const countriesUppercased = countries.map(country => country.toUpperCase())
countriesUppercased   //  [ "FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND" ]

const countriesLength = countries.map(country => country.length)
countriesLength       // [ 7, 6, 7, 6, 7 ]

const uppercasedNames = names.map(name => name.toUpperCase())
uppercasedNames       // [ "ASABENEH", "MATHIAS", "ELIAS", "BROOK" ]

const squaredNumbers = numbers.map(number => number*number)
squaredNumbers        // [ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ]

const productPrices = products.map(product => product.price)
productPrices         // [ 3, 6, " ", 8, 10, "" ]


const countriesContainingLand = countries.filter(country => country.match(/land/gi));
countriesContainingLand    // [ "Finland", "IceLand" ]



const countriesHavingSixCharecters = countries.filter(country => country.length === 6);
countriesHavingSixCharecters   // [ "Sweden", "Norway" ]



const countriesHavingMoreThanSixCharecters = countries.filter(country => country.length >= 6)
countriesHavingMoreThanSixCharecters   // [ "Finland", "Sweden", "Denmark", "Norway", "IceLand" ]


const countriesStartWithCharecterE = countries.filter(country => country.startsWith('E'));
countriesStartWithCharecterE   // [] - Empty (No Countries Available)

const productWithValidPrices = products.filter(product => product.price !== "" && product.price !== " " );  /* 
                                                                                                                0: { product: "banana", price: 3 }​
                                                                                                                1: { product: "mango", price: 6 }​
                                                                                                                2: { product: "avocado", price: 8 }
                                                                                                                3: { product: "coffee", price: 10 }  */

const getStringLists = arr => {
    const stringArray = []

    arr.forEach(el =>{typeof el === 'string'? stringArray.push(el): stringArray});

    return stringArray  // Returns only strings from an array.
}

const mixedArray = [true, 1, false, 0, '4CH13V3R']

// getStringLists(mixedArray)     // [ "4CH13V3R" ]

const sumOfNumbers = numbers.reduce((accumulator, currrent) => accumulator + currrent, 0)
sumOfNumbers      // 55

const concatedCountries = countries.reduce((acc, cur) => acc+', '+cur)

concatedCountries   // Finland, Sweden, Denmark, Norway, IceLand

/*

- "some" returns true if at least one element in the array satisfies the condition.
- "every" returns true only if all elements in the array satisfy the condition.

*/

const areSomeNamesLengthAreGreaterThan7 = names.some((name)=>name.length>7)
areSomeNamesLengthAreGreaterThan7    // true

const isEveryCountriesContainsTheWordLand = countries.every((country)=>country.match(/land/gi));
isEveryCountriesContainsTheWordLand    // false


/*

- "find", returns the first element which satisfies the condition
- "findIndex", returns the index of first element which satisfies the condition

*/

const firstCountryContainingSixCharecters = countries.find((country)=> country.length === 6)
firstCountryContainingSixCharecters    // Sweden


const indexOfFirstCountryContainingSixCharecters = countries.findIndex(country => country.length === 6)
indexOfFirstCountryContainingSixCharecters  // 1

const findIndexOfNorwayInCountriesArray = countries.findIndex(country => country === 'Norway')
findIndexOfNorwayInCountriesArray      // 3

const findIndexOfRussiaInCountriesArray = countries.findIndex(country => country === 'Russia')
findIndexOfRussiaInCountriesArray     // -1
