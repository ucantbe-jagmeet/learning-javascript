// function fullName(firstName, lastName) {
//   const fullname = `${firstName} ${lastName}`;

//   return fullname.toUpperCase();
// }
// console.log(fullName("jagmeet", "singh"));
// console.log(fullName("singh", "jagmeet"));

function fullName({ firstName, lastName }) {
  const fullname = `${firstName} ${lastName}`;

  return fullname.toUpperCase();
}

console.log(fullName({ lastName: "singh", firstName: "Jagmeet" }));
