// Callback Function, higher Order functions, Function as First calss Objects / Citizens

// Functions are first class objects - stored in a variable (expression) , passes as an argument to another function, return from the function (closure)

// Higher Order function - accepts another function as an argument or returns another function as a result

// Callback Function - passed to a another function as an argument and excuted inside that function

function greetMorning(name) {
  const myName = "jags";
  console.log(`Good Morning ${name}, My name is ${myName}`);
}

function greetAfternoon(name) {
  const myName = "John";
  console.log(`Good Afternoon ${name}, My name is ${myName}`);
}

// greetAfternoon('noonsy');
// greetMorning('ullia');

//-------------------Higher Order Functions-----------

function morning(name) {
  return `Good Morning ${name.repeat(3)}`;
}

function Afternoon(name) {
  return `Good Afternoon ${name.toUpperCase()}`;
}

function greet(name, Callback) {
  // Callback();
  const myName = "John";
  console.log(`${Callback(name)}, My name is ${myName}`);
}

greet("bobo", morning);
greet("Susan", Afternoon);
