/*
  Make osup 
  chop onion
  chop carrots
  boil water 10 min
  add carrots boil for 5 min
  add onion boil for 5 min

  -> browser!!!! fetch data, get Geolocation, setTimeout, setTimer etc

  -> calbacks, promises, async/ await
*/

boilWater();
console.log(`chop carrots`);

function boilWater() {
  console.log(`boiling....`);
  setTimeout(() => {
    console.log(`done`);
    console.log(`add Carrots`);
    setTimeout(() => {
      console.log(`Carrots are done`);
      console.log(`add onions`);
      setTimeout(() => {
        console.log(`onions done`);
      }, 5000);
    }, 5000);
    console.log(`chop onion`);
  }, 10000);
}
