// Fetch is built in
// promised based
// XHR is not wrong , you can complete all our upcoming examples and projects usings XHR. Fetch is just alternative approach that has simpler and cleaner syntax. the end result is the same . Still get dynamically, behind the scenes

const url = "./api/people.json";

// const response = fetch(url);
// // console.log(response);

// fetch(url)
//   .then((resp) => {
//     // response object
//     // useful prop and methods
//     // console.log(resp);
//     // convert response into json data
//     // return promise

//     return resp.json();
//   })
//   .then((data) => {
//     console.log(data);
//   }).catch((err) => console.log(err));

fetch(url)
  .then((resp) => resp.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
