// 8 kyu - CSV representation of array
// https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/train/javascript

//Solution #1
const toCsvText = array => array.join('\n')

//Solution #2
const toCsvText = array => array.map(subArr => subArr.map(num => num.toString()).join(',')).join('\n')

//prep

//p: array with sub array of numbers
//r: a string with break lines and commas
//e: [[ 0, 1, 2, 3, 45 ], r: '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34'
//   [ 10,11,12,13,14 ],
//   [ 20,21,22,23,24 ],
//   [ 30,31,32,33,34 ]]
//p: use the join method with regex break \n between elements or use two nested map
//   methods with changing sub arrays into strings and joining them together, and then
//   once again joining all elements with a line break \n
