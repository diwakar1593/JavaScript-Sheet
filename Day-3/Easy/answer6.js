/*
Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
1. 4 > 3 && 10 < 12
2. 4 > 3 && 10 > 12
3. 4 > 3 || 10 < 12
4. 4 > 3 || 10 > 12
5. !(4 > 3)
6. !(4 < 3)
7. !(false)
8. !(4 > 3 && 10 < 12)
9. !(4 > 3 && 10 > 12)
10. !(4 === '4')
11. There is no 'on' in both dragon and python 
*/

/*
Result without using console.log().
1. 4 > 3 && 10 < 12         // true
2. 4 > 3 && 10 > 12         // false
3. 4 > 3 || 10 < 12         // true
4. 4 > 3 || 10 > 12         // true
5. !(4 > 3)                 // false
6. !(4 < 3)                 // true
7. !(false)                 // true
8. !(4 > 3 && 10 < 12)      // false
9. !(4 > 3 && 10 > 12)      // true
10. !(4 === '4')            // true
11. There is no 'on' in both dragon and python      // false
*/

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log('pyth'.length > 'drag'.length)
