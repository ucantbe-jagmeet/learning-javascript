// console.log(students);

let updatedStudents = students.map((e) => {
  e.role = "student";

  return e;
});

// console.log(updatedStudents);

let highScores = students.filter((e) => {
  if (e.score >= 85) {
    return e;
  }
});

console.log(highScores);
