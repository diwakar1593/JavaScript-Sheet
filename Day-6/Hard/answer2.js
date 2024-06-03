/*
Arrays are mutable. Create a copy of array which does not modify the original.
Sort the copied array and store in a variable sortedCountries.
*/


const countries = [
    'Albania',
    'Bolivia',
    'Germany',
    'Hungary',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Ireland',
    'Japan',
    'Kenya'
    ]

  const clone = [...countries];
  const sortedCountries = clone.sort();
  console.log(countries);
  console.log(sortedCountries);
