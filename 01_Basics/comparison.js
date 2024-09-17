// console.log("2" > 1); => true
// console.log("02" > 1); => true

// console.log(null > 0); // false
// console.log(null == 0); // Equality check so => false
// console.log(null >= 0); // true

// Bcoz equality == and comparison ><>=<= works different
// Comparison converts null to a number(treats as 0) 

// Strictly Check '==='
//console.log("2" == 2); => datatype conversion takes place
//console.log("2" === 2); // "false" => it checks the datatype and check without conversion 
// string === number, which returns false

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);




