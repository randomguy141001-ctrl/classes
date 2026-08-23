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
    registerUser("Uche", 15);
   

} catch (error) {
    console.log("Unresolved error:", error.message);
} finally {
    console.log("Cleaning up...");
}
