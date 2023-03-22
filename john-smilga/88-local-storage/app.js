// Web Storage API - provided by browser
// session storage, local storage
// setItem, getItem , removeItem, clear

// -> session storage mei data tab tak apne pass rhega jab tak tab close nhi hota
// -> localStorage mei data tab tak apne pass rhega jab thak puri window close nhi hoti

// localStorage.setItem("key", "value");

// localStorage.setItem("name", "Jagmeet");
// sessionStorage.setItem("name", "Jagmeet");

localStorage.setItem("name", "Jagmeet");
localStorage.setItem("friend", "peter");
localStorage.setItem("job", "developer");
localStorage.setItem("address", "street 123");

const name = localStorage.getItem("name");
console.log(name);

localStorage.removeItem("name");
const anotherName = localStorage.getItem("name");
console.log(anotherName);

localStorage.clear();
