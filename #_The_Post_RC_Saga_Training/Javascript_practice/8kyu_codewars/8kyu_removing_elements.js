// 8 kyu - Removing Elements
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

//Solution #1
const removeEveryOther = arr => {
  const finalArr = [];
  arr.map((value, index) => index % 2 === 0 ? finalArr.push(value) : ''); 
  return finalArr;
}

//Solution #2
const removeEveryOther = arr => arr.filter((value, index) => index % 2 === 0);

//prep

//p: array of strings or numbers
//r: a new array with only kept elements
//e: p: ['Hello', 'Goodbye', 'Hello Again'] r: ['Hello', 'Hello Again'])
//p: #1) use the map method and in the call back have a function that pushes the element into 
//   an empty array when the index is negative only and return final array.
//   #2) use the filter method and return an array that passes the callback function
