// objects - key / value pairs methods
// dot convention

const car = {
  make: "Toyota",
  model: "SUV",
  year: "2019",
  colors: ["red", "black", "green", "white"],
  drive: function () {
    console.log("You are driving this car");
  },
  stop() {
    console.log("This car is stopped");
  },
};

console.log(car.make);
console.log(car.drive());
console.log(car.stop());
car.stop();
