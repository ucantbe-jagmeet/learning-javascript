// console.log(students);

let updatedStudents = students.map((e) => {
  e.role = "student";

  return e;
});

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

let averageScore =
  students.reduce((acc, curr) => {
    return (acc += curr.score);
  }, 0) / students.length;

let survey = students.reduce((survey, student) => {
  const favSub = student.favouriteSubject;
  if (survey[favSub]) {
    survey[favSub] += 1;
  } else {
    survey[favSub] = 1;
  }

  return survey;
}, {});

console.log(survey);
