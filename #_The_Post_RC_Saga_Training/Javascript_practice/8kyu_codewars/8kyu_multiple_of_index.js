// 8 kyu - Multiple of index
// https://www.codewars.com/kata/5a34b80155519e1a00000009/train/javascript

const multipleOfIndex = array => array.filter((cv, idx) => cv % idx === 0);

//prep

//p: array of numbers
//r: shorter array of numbers that passed a condition
//e: [68, -1, 1, -7, 10, 10], [-1, 10]
//p: use the filter method with a callback with two parameters of current
//   value and index. Then use modulus of the current value against its
//   index with no remainder to see if the element is a multiple of the index
//   finally the filter method returns a new array that passes this test
