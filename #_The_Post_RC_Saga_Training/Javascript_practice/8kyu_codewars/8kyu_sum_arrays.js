// 8 kyu - Sum Arrays
// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript

function sum (numbers) {
  return numbers.length === 0 ? 0 : numbers.reduce((a,b) => a+b);
};
