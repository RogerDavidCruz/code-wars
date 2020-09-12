// 8 kyu - Calculate average
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

function find_average(array) {
  return array.reduce((accum,currentVal) => accum + currentVal,0) / array.length;
}

