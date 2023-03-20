const gas = [20, 40, 100, 30];
const food = [10, 35, 50];

function calculateTotal(arr)
{
    let total = 0;
    for(let i =0;  i < arr.length; i++)
    {
        total += arr[i];
    }

    if(total > 100)
    {
        console.log(`you are spending to much`);
        return total;
    }
    else
    {
        console.log(`you are good to go ... spend more`);
    }

    return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200,1400,410,12]);


console.log({
    gas: gasTotal,
    food: foodTotal,
    random: randomTotal
});