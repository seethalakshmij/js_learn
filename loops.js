//for loop
//syntax
/*for (initialization; condition; update) {
    // code to repeat
}
*/

for (i=0; i<=5; i++){
    console.log("Hello")
}

///while loop
i=0
while (i<=5){
    console.log("Bye")
    i++
}

//do...while loop
i=5
do{
    console.log("Master and slave")
    i++
}
while (i<=10)

//for-of loop
list = [1,2,3,4,10]
for (i of list){
    console.log(i)
}


// for-in loop
student = {
    name: "seetha",
    age: 20,
    depart: "IT"
}

console.log(typeof(student))


for (i in student){
    console.log(i)
}

for (i in student){
    console.log(i, student[i])
}