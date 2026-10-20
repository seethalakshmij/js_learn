//if statement
if (5>2){
    console.log("5 is bigger!!")
}



//if-else statement
if (5==2){
    console.log("5 is equal to 2")
}
else {
    console.log("5 is not equal to 2")
}

//if-else if-else statement
product="brush"
if (product=="paste"){
    console.log("I bought a paste")
}
else if (product == "mouth washer"){
    console.log("I bought a mouth washer")
}
else if (product == "brush"){
    console.log("I bought a brush")
}
else {
    console.log("I bought a nothing")
}

//Nested if
a=100
b=200
if (a<=b){
    if (a>50){
        console.log("a is smaller than" +" "+b +", "+"but greater than 50")
    }
}

//switch statement
day=2

//without proper break keyword handling
//this is called as fall-through
switch (day){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        
    case 3:
        console.log("Wednesday")
        break
    default:
        console.log("Invalid day")
}

console.log("***********")

//with proper break handling
switch (day){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    default:
        console.log("Invalid day")
}

/*
With break
Match case 2 → Print Tuesday → Stop


Without break
Match case 2

Print Tuesday

Print Wednesday

Print Invalid day
*/

//Ternary operator (? :)
console.log("Ternary operator (? :)")
//shorter way to write a simple if...else statement
age=20
result = age>18? "adult" : "baby"
console.log(result)