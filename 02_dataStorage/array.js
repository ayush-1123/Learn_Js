const myArr = new Array(0,1,2,3,4,5)
//console.log(myArr);

// myArr.push(6) => [1,2,3,4,5,6]
// myArr.pop() => removes the last element

// Shift and Unshift
// myArr.unshift(0) => add the ele in the start
// myArr.shift() => removes a ele from the start

// console.log(myArr.includes(8)); => false: returns a boolean value 
// console.log(myArr.includes(2)); => true
// console.log(myArr.indexOf(3)); => returns the index of the element

const newArr = myArr.join()
// Adds all the elements of an array into a string, separated by the specified separator string
// console.log(myArr);
// console.log(typeof myArr);
// console.log(newArr);
// console.log(typeof newArr);

// **********Slice and Splice*************

// console.log("A: ", myArr);
// console.log("using slice:", myArr.slice(1,3));

// console.log("B: ", myArr);
// console.log("using splice:", myArr.splice(1,3)); // splice() removes the specified range from the array

// console.log("C: ", myArr); // final array as o/p

// #### Concat operation #####

const arr1 = [1, 2, 3, 4, 5]
const arr2 = ["a", "b", "c", "d"]
//arr1.push(arr2)  => [1,2,3,4,5,['a','b','c','d']] treated array as a single element 

const narr = arr1.concat(arr2) // combines two or more arrays and output as a single array
// console.log(narr);
// console.log(narr.length);

// *** Using Spread Operator [...arr] 'Imp interview ques'

const anotherArr = [...arr1, ...arr2]
//console.log(anotherArr);

const array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const anotherArray = array.flat(Infinity)
// console.log(anotherArray);

console.log(Array.isArray("Ravi"));
console.log(Array.from("Ravi"));













