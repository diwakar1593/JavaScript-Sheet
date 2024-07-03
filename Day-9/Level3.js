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


/*
>>-------- L 3 V 3 L  3  --------------->
*/


const sortedCountriesByName = [...countriesData].sort((a, b)=> {
    if (a.name < b.name) return -1;
  
    if (a.name > b.name) return 1;
  
    return 0;
  })
  
  sortedCountriesByName  // Returns Array sorted by country's name.
  
  
  
  function mostSpokenLanguages(countriesArray, count){
  
  const languageCounts = {};
  
  countriesArray.forEach(country => {
  
    country.languages.forEach(language => {
      if(languageCounts[language]){
        languageCounts[language]++;
      }else {
        languageCounts[language]=1;
      }
    })
  
  })
  
  const languageCountsArray = Object.keys(languageCounts).map(language => {
    return { country: language, count: languageCounts[language] }
  })
  
  const filteredArray = languageCountsArray.sort((a, b) => {
    if(a.count > b.count) return -1;
  
    if(a.count < b.count) return 1;
  
    return 0
  }).splice(0, count)
  
  return filteredArray
  
  }
  
  // mostSpokenLanguages(countriesData, 5)           RESULT:
                                                /*  { country: "English", count: 91 }
                                                    { country: "French", count: 45 }​
                                                    { country: "Arabic", count: 25 }
                                                    { country: "Spanish", count: 24 }
                                                    { country: "Portuguese", count: 9 }
                                                */
  
  
  function findMostPopulatedCountries(countriesArray, count){
  
    const newArray = countriesArray.map(currentCountry => {
                                      return { country: currentCountry.name, 
                                              population: currentCountry.population }
                                    }).sort((a, b) => {
                                      if(a.population > b.population) return -1;
  
                                      if(a.population < b.population) return 1;
  
                                      return 0;
                                    });
  
    return newArray.splice(0, count)
  }
  
  findMostPopulatedCountries(countriesData, 5)    /* RESULT:
                                                    {country: 'China', population: 1377422166},
                                                    {country: 'India', population: 1295210000},
                                                    {country: 'United States of America', population: 323947000},
                                                    {country: 'Indonesia', population: 258705000},
                                                    {country: 'Brazil', population: 206135893},
                                                  */
  
  
  const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
                                                  
  const statistics = {
    
    count(){
      return ages.length;
    },
  
    sum(){
      return ages.reduce((acc, cur) => acc+cur, 0)
    },
  
    min(){
      return Math.min(...ages);
    },
  
  
    max(){
      return Math.max(...ages)
    },
  
    sort(){
      return ages.sort((a, b) => {
        if(a > b) return 1;
  
        if(a < b) return -1;
  
        return 0
      })
    },
  
    range(){
      return Math.max(...ages) - Math.min(...ages)
    },
  
    mean(){
      return Math.round(this.sum() / this.count())
    },
  
    median(){
      const arr = [],
            arrayLength = this.sort().length,
            sortedArray = this.sort();
  
      if(arrayLength %2 !== 0){
        arr.push(sortedArray[Math.ceil(arrayLength/2-1)])
  
        return [...arr]
      }
  
      else if(arrayLength %2 === 0){
        arr.push(sortedArray[Math.ceil(arrayLength/2-1)], sortedArray[Math.ceil(arrayLength/2-1)+1])
  
        return [...arr].reduce((acc, cur) => acc+cur, 0)/2
      }
  
      return 'Error';
    },
  
    mode(){
      const sortedArray = this.sort();
  
      const frequency = sortedArray.reduce((freq, num) => {
        freq[num] = (freq[num] || 0) +1;
        return freq;
      }, {});
  
      const result = Object.keys(frequency).map(freq => {
        return { 'mode': freq, 'count': frequency[freq] }
      }).sort((a, b) => {
  
        if(a.count > b.count) return -1;
        if(a.count < b.count) return 1;
        return 0;
      }).slice(0, 1)
  
      
      return result[0];
    },
  
    var(){  // Variance
      const mean = this.mean();
  
      const sumSquaredDeviations = ages.reduce((sum, num)=> sum+Math.pow(num -mean, 2), 0)
  
      const variance = sumSquaredDeviations / ages.length;
  
      return variance
    },
  
    std(){  // Standard Deviation
      const variance = this.var()
  
      return Math.sqrt(variance).toFixed(1)
    }
  
    // Skipping Frequency Distribution
  }
  
  console.log(statistics.count())   // 25
  console.log(statistics.sum())     // 744
  console.log(statistics.range())   // 14
  console.log(statistics.mean())    // 30
  console.log(statistics.sort())    /* Returns sorted array
                                       Actually sorting an array is not
                                       mentioned in challenge, but i tried for myself
                                    */
                                    
  
  console.log(statistics.median())  // 29
  
  console.log(statistics.mode())    // { mode: "26", count: 5 }
  
  console.log(statistics.var())     // 17.6
  console.log(statistics.std())     // 2