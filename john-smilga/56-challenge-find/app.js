// console.log(students);

let updatedStudents = students.map((e) => {
  e.role = "student";

  return e;
});

// console.log(updatedStudents);

let highScores = students.filter((e) => {
  // if (e.score >= 85) {
  //   return e;
  // }

  // if (e.score >= 85) return e;

  return e.score >= 85;
});

let specificId = students.find((e) => {
  return e.id === 3;
});

console.log(specificId);
