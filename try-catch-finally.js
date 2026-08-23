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
console.log(txt.replaceAll("fair", "unfair"));


let id = "9";
console.log(id.padStart(6, "5"));

console.log("*".repeat(7));

let size = "50.69kg";
let price = 21.699;
console.log(price.toFixed(2));

console.log(parseFloat(size));

console.log(parseInt(size));

console.log(Number(size));
console.log(Number(price));