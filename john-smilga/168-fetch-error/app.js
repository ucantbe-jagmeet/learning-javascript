// Fetch is built in
// promised based
// XHR is not wrong , you can complete all our upcoming examples and projects usings XHR. Fetch is just alternative approach that has simpler and cleaner syntax. the end result is the same . Still get dynamically, behind the scenes

const url = "./api/people.json";
// url error will show same as network error

fetch(url)
  .then((resp) => resp.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
