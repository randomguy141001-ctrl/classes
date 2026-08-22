const students = ["This is array:", "chuk", "guy", "hecker", "mcfly", "herman"];
console.log(students);
console.log("This is sLiced:", students.slice(2));
console.log("This is sPliced:", students.splice(1,2));

const complexion = ["dark", "medium", "fair"];
const darkComplexion = complexion.filter((item) => item === "dark");
console.log(darkComplexion);

