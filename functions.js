//declare
//functions without parameters

function greetings (){
    console.log("Hello, welcome to our website!");
}

greetings()



//functions with parameters

function welcome(name){
    console.log(`Welcome to class ${name}!`);
}

welcome("Sire");

//add
//this a static function
function add (){
    let x = 4;
    let y = 6;
    return x + y, x - y
}
console.log(add())


//dynamic function
function addition (x,y){
    return x + y
}

console.log(addition(9, 10))