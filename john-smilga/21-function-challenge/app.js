// Arrays, Functions and Objects
// return
// default undefined, shortcuts, ignores after
// 1 inch 2.54cm

const calculateTotal = function (subTotal, tax) {
  const total = subTotal + tax;
  return total;
};

// console.log(calculateTotal(200, 33));

const order1 = calculateTotal(100, 10);
const order2 = calculateTotal(50, 5);
const order3 = calculateTotal(120, 12);

console.log(order1, order2, order3);
