const a = new Set([10, 20, 30, 40, 50])
const b = new Set([30, 40, 50, 60, 70])

const C = new Set([...a, ...b])

// console.log(C)    //  [ 10, 20, 30, 40, 50, 60, 70 ] - Duplicates are not Allowed.

const aIntersectionB = [...a].filter(a => b.has(a));  // Returns values only if true

// console.log(aIntersectionB)  // [ 30, 40, 50 ]

const aDifferenceB = [...a].filter(a => !b.has(a));

// console.log(aDifferenceB)   // [ 10, 20 ]

