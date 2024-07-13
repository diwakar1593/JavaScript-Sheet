const x = [4, 5, 8, 9];
const y = [3, 4, 5, 7];
const threeCountries = ['Finland', 'Sweden', 'Norway']
const numbersInWords = ['one', 'two', 'three', 'four', 'five'];

const emptySet = new Set()  // Empty Set {}

for(let i=1; i<=10; i++){
    emptySet.add(i)
}

console.log(emptySet)  // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] - emptySet is now not a Empty Set!

emptySet.delete(1)    // 1 has been removed from set

emptySet.clear()      // [] - Values has been cleared, Now it's a real Empty Set.

const numberInWordsSet = new Set(...[numbersInWords]);  // [ "one", "two", "three", "four", "five" ]

const superArr = threeCountries.map(country => {
    return {[country]: country.length}              // Returns as property and value in form of an Object
})                                              /*
                                                    { Finland: 7 }
                                                    { Sweden: 6 }
                                                    { Norway: 6 }
                                                */
