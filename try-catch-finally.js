try {
    let result = riskyOperation();
    console.log(result);    
} catch (error) {
    console.log("Something went wrong:", error.message);
} finally {
    console.log("Clean up (always runs regardless of success or failure)");
}





function registerUser(name, age) {
   
  if (!name)
        throw new Error("Name is required");
    if (age < 18)
        throw new Error("User must be at least 18 years old to register");

    console.log("Registered: " + name, age);
}

try {
    registerUser("Chuk", 24);
    registerUser("Emy", 22);
     registerUser("", 30);
    registerUser("Dora", 15);
   

} catch (error) {
    console.log("Unresolved error:", error.message);
} finally {
    console.log("Cleaning up...");
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


