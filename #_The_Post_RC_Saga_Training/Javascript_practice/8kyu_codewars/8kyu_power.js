// 8 kyu - Power
// https://www.codewars.com/kata/562926c855ca9fdc4800005b/train/javascript

numberToPower = (number, power) => {
    if (power === 0) return 1;
    let finalArr = [];
    for(let i = 0; i<power; i++){
      finalArr.push(number);
    }
    return finalArr.reduce((accum, cv) => accum * cv);
  }
  
  //PREP
  
  //P: two numbers
  //R: one number
  //E: 4, 2 => 16
  //P: create a condition for when power argument is 0 return 1. Then create
  //   an empty array and with a for loop, add elements of number into the
  //   array power argument number of times. Finally use the reduce method
  //   to multiply all the elements in this array and return this value.
  