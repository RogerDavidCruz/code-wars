// 8 kyu - pick a set of first elements
// https://www.codewars.com/kata/572b77262bedd351e9000076/train/javascript

// Solution # 1
const first = (arr, n) => typeof n === 'undefined' ? arr.slice(0, 1) : n != 0 ? arr.slice(0, n) : [];

// Solution # 2
const first = (arr, n=1) => arr.slice(0, n);

//prep

//p: an array and number
//r: an array 
//e: p: ['a', 'b', 'c', 'd', 'e'], 2 r: ['a', 'b']
//p: slice method can return a new array by taking the first param
//   arr and deciding where to slice based on the second param n.
