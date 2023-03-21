// console.log(students);

let updatedStudents = students.map((e) => {
  e.role = "student";

  return e;
});

console.log(updatedStudents);
