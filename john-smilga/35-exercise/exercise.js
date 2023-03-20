const names = ['anna', 'susy','bob','john'];
const lastName = 'shakeAndBake';

let newArray = [];

// user for loop to iterate over the array
for( let i=0; i < names.length; i++)
{
    // console.log(names[i]);
    // newArray.push(names[i]);
    const fullName = `${names[i]} ${lastName}`;
    newArray.push(fullName); // thats the perfect way of adding values to new array
}

console.log(newArray);
