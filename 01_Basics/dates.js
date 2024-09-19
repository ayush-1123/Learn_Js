// all dates are calculated with the refernece Januaury 1,1970
const myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);  => Object

//const myCreatedDate = new Date(2024, 9, 8) // Date(Year, Month, Date) => months starts from 0-11
//const myNewDate = new Date(2024, 9, 8, 5, 25, 52)
const myNewDate = new Date("08-10-2024")
//console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // gives time in 'ms' from jan 1,1970
// console.log(myNewDate.getTime()); //gives time from jan 1,1970 and 8-10-2024

let getDate = new Date()
console.log(getDate);
console.log(getDate.getMonth() + 1);












