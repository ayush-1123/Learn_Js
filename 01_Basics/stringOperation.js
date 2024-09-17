const name = "john"
const count = 50
//console.log(name + " " + count + " value");

//console.log(`Hello my name is ${name} and my age is ${count}.`);
//backtick (`) character

const newString = new String("hello");
// console.log(newString);
// console.log(newString.__proto__); // => {} shows a object
// console.log(newString.length);
// console.log(newString.toUpperCase());
// console.log(newString.charAt(2));
//console.log(newString.indexOf('o'));
const subString = newString.substring(1, 4)
//console.log(subString);

const sliceString = newString.slice(-4, 3)
//console.log(sliceString);

const trimString = "    camera    "
// console.log(trimString);
// console.log(trimString.trim()); => remove start n end both spaces
// console.log(trimString.trimStart()); => removes start spaces
// console.log(trimString.trimEnd()); => removes end spaces

const replaceString = "https://CrunchyRoll.com/Anime%20Series"
//console.log(replaceString.replace("%20", "-"));

const helloString = "hello how are you hello i am"
console.log(helloString.replace("hello", "Roy"));
console.log(helloString.replaceAll("hello", "Roy"));










 


