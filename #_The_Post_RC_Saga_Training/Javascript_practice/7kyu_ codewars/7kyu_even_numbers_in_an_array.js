// 7 kyu - Even numbers in an array
// https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/javascript

const evenNumbers = (array, number) => array.filter(x => x % 2 === 0).splice(-number);

//prep

//p: an array of numbers and an integer
//r: an array of even numbers and the length of the 2nd parameter
//e: ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
//p: use the filter method with a call back function that filters for even numbers only
//   then use splice method with a negative number of the 2nd parameter
