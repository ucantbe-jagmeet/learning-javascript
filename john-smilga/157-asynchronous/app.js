/*
  Make osup 
  chop onion
  chop carrots
  boil water 10 min
  add carrots boil for 5 min
  add onion boil for 5 min

  -> browser!!!! fetch data, get Geolocation, setTimeout, setTimer etc
*/

boilWater(1000);
console.log(`chop carrots`);
for (let i = 0; i < 10000; i++) console.log(`still busy`);

function boilWater(time) {
  console.log(`boiling....`);

  setTimeout(() => {
    console.log(`done`);
  }, time);
}

// its behaviour will be same if we arrange the order of code
