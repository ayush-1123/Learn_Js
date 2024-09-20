// Ways to create an object
// 1)Constructor
// singleton object

// 2)object literals

const mySym = Symbol("key")

const myUser = {
    name: "Ayush",
    "full name": "Ayush Gupta",
    age: 21,
    [mySym]: "myVal", // ##IMP for interview
    location: "Noida",
    email: "ayush@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Fri"]
}

// console.log(myUser.name);
// console.log(myUser["email"]);
// console.log(myUser["full name"]);
// console.log(myUser[mySym]);
// console.log(typeof myUser[mySym]);
// console.log(myUser);

// access n change
myUser.email = "ayush@chatgpt.com"
//Object.freeze(myUser)
myUser.email = "ayush@microsoft.com"
//console.log(myUser);

myUser.greeting = function(){
    //console.log("Hello myUser!!");
}

myUser.greetingTwo = function(){
    //console.log(`Hello myUser, ${this.name}`);
}

// console.log(myUser.greeting());
// console.log(myUser.greetingTwo());

//******************************************************** */
// Another way to declare object ie.,  singleton object

//const tinderUser = new Object () // singleton object

const tinderUser = {} //=> non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "sam@gmail.com",
    userFullname: {
        fullName: {
            name: "samm",
            age: 20
        }
    }
}

// console.log(regularUser.userFullname.fullName.name);
// console.log(regularUser.userFullname.fullName.age);

//**** Combining two objects */
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1, obj2} // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//const obj3 = Object.assign({}, obj1, obj2) // {1: 'a', 2: 'b', 3: 'c', 4: 'd'}

const obj3 = {...obj1, ...obj2} // using spread operator n used most of the times
//console.log(obj3);

//console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // => returns an keys array of the object passed
// console.log(Object.values(tinderUser)); => returns an values array
//console.log(Object.entries(tinderUser)); 
//console.log(tinderUser.hasOwnProperty("name"));


//**************************************************************** */






