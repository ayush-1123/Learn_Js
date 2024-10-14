function addTwoNumbers(num1, num2){
    //console.log(num1 + num2);
    return num1 + num2
}

const result = addTwoNumbers(3,"a")
//console.log(result);

function loginUserMessage(username){
    if (!username){
        //console.log("Pls enter a username");
        return
    }
    return `${username}, Thank you for log in.`
}

//console.log(loginUserMessage());

function calculatePrice(val1, val2, ...n1){ // Concept of Rest Opr introduced
    return n1
}
// after using REST OPR it combines & returns an array of numbers
//console.log(calculatePrice(200, 400, 500, 1000)); // => val1 = 200, val2= 400, and remaining goes to array using rest opr

const user = {
    username : "alice",
    price : 999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user)
handleObject({
    username : "sam",
    price : 999
})
