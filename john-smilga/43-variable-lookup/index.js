// Variable Lookup
// {} - code block
// when the value doesnt declare in scope where it is called then it will find same variable in its parent function or at last it will search in global variables

const globalNumber = 5;
function add( num1 , num2)
{
    const globalNumber = 6;
    const result = num1 + num2 + globalNumber;
    return result;
}

console.log(add(3,4));


