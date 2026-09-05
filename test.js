//let score = 24;
//if (score >= 90) {console.log("Got A");} 
//  else if (score >= 80) {console.log("Got B nigga");} 
//   else if (score >= 50) {console.log("Got C My Bro");} 
//   else if (score <= 45) {console.log("YOU SHALL NOT PASS!!");}



//let students = ["chuk", "Guy", "Hecker"];

//for (let student of students) 
//    {console.log("Yoo, "+ student +" !!");}

let loginAttempts = 1
while(loginAttempts <= 3){
    console.log(`attempt number ${loginAttempts}`)
    loginAttempts++
}


let scores = [20, 12, 25, 15];

for(let newscore = 0; newscore < scores.length; newscore++) {
    console.log(scores[newscore] + 20);
}


//trying something here
let person = { name: "chuk", color: "blue" };
let hasId1 = true;
    if (hasId1 === true) {
        console.log("He's clean");
    }
    else {
        console.log("He's Dirty");
    }
console.log(person.color)
let hasId2 = false;
 if (hasId2 == true) {
        console.log("He's double clean");
    }
    else {
        console.log("He's double dirty");
    }


    
console.log(hasId1);
console.log(person); {

}


let txt = "Im okay, life is fair. I want to like being fair though"
console.log(txt);

//Replaces all occurrences of "fair" with "unfair"
console.log(txt.replaceAll("fair", "unfair"));

//Gives 6 characters but starts from "5"
let id = "9";
console.log(id.padStart(6, "5"));

//Repeats the string 7 times
console.log("*".repeat(7));

let size = "50.69kg";
let price = 21.699;

//Converts the price to a string with 2 decimal places
console.log(price.toFixed(2));

//Converts the string to a floating-point number
console.log(parseFloat(size));

//Converts the string to an integer, ignoring the non-numeric characters
console.log(parseInt(size));

console.log(Number(size));
console.log(Number(price));


let students = [{name: "Chuk", 
                age: 24, 
                course: "Backend Dev",
                isRegistered: true}, 

                {name: "Emy",
                age: 22, 
                course: "Cybersecurity",
                isRegistered: true},];

console.log((students[0].name + " is " 
            + students[0].age + " and is on " 
            + students[0].course));
console.log(students);


