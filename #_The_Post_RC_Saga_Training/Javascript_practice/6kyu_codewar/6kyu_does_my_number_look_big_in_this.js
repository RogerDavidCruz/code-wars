// 6 kyu - Does my number look big in this?
// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

narcissistic = (value) => {
  let exponent = value.toString().split('').length;
  let summedVal = value.toString().split('').map(cv => Math.pow(parseInt(cv), exponent)).reduce((cv, accum) => cv + accum);
  return summedVal === value;
}

//PREP

//P: A number
//R: either true or false (boolen) 
//E: 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 => True
//P: change the number to a string, then split the number, then use map method on the array
//   for each element use Math.pow and value as the exponent. Then use the reduce method
//   to add all the elements together and return true if the new sum value equals the
//   original parameter value, otherwise return false.