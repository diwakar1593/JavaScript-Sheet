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


const totalPriceOfProducts = products.map(product => product.price).filter(price => typeof price === 'number').reduce((acc, cur) => acc+cur, 0)

totalPriceOfProducts   // 27

const totalPriceOfProductsUsingReduce = products.reduce((acc, product) => {
                                                            const price = Number(product.price) || 0;

                                                            return acc + price
                                                        }, 0)
totalPriceOfProductsUsingReduce     // 27



function categorizeCountries(countries) {
    const patterns = {
      'land': [],
      'ia': [],
      'island': [],
      'stan': []
    };
  
    // Helper function to check if a country matches a pattern
    function matchesPattern(country, pattern) {
      return pattern(country.toLowerCase());
    }
  
    // Higher order function to categorize a country based on a pattern
    function categorizeCountry(country, pattern, category) {
      if (matchesPattern(country, pattern)) {
        patterns[category].push(country);
      }
    }
  
    // Categorize each country based on the patterns
    countries.forEach(country => {
      categorizeCountry(country, name => name.endsWith('land'), 'land');
      categorizeCountry(country, name => name.endsWith('ia'), 'ia');
      categorizeCountry(country, name => name.includes('island'), 'island');
      categorizeCountry(country, name => name.endsWith('stan'), 'stan');
    });
  
    // Return the array of categorized countries
    return patterns;
}
  
categorizeCountries(countries)   // Finland, IceLand.



// function startingLettersCountInArray(array){      // Just skipping this for now :-|
//     const firstLetter = {}

//     array.forEach(elements => {
//         const el = elements[0];            // SKIPPED PART
//         firstLetter[el] = [1]
//     })

//     return firstLetter
// }


const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'l', 'm', 'n', 'o', 'p']   // Tried Alphabets instead of Countries.

const filteredAlphabets = alphabets.filter(char=> alphabets.indexOf(char)<=9)

filteredAlphabets  //  [ "a", "b", "c", "d", "e", "f", "g", "h", "l", "m" ] First 10

const reversedAlphabets = [...alphabets].reverse()

const lastTenAlphabets = reversedAlphabets.filter(char => reversedAlphabets.indexOf(char)<=9).reverse()

lastTenAlphabets   // [ "d", "e", "f", "g", "h", "l", "m", "n", "o", "p" ] Last 10


