// Date

const months = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = new Date();
const month = date.getMonth();
const day = date.getDay();

console.log(months[month]);
console.log(days[day]);
console.log(date.getDate());
console.log(date.getFullYear());

const sentence = `${days[day]}, ${date.getDate()}, ${
  months[month]
}, ${date.getFullYear()}`;

console.log(sentence);
