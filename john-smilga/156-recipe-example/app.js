/*
  Make osup 
  chop onion
  chop carrots
  boil water 10 min
  add carrots boil for 5 min
  add onion boil for 5 min
*/

console.log(`chop onion`);
console.log(`chop carrot`);
boilWater(10000);
boilWater(5000);
boilWater(5000);

function boilWater(time) {
  console.log(`boiling....`);

  for (let i = 0; i < time; i++) console.log(`still not done`);

  console.log(`done...`);
}

// its behaviour will be same if we arrange the order of code
