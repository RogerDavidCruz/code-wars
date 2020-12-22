// 8 kyu - Take an Arrow to the knee, Functionally
// https://www.codewars.com/kata/559f3123e66a7204f000009f/train/javascript

var ArrowFunc = function(arr) {
  return arr.map(num => String.fromCharCode(num)).join('')
}

//prep

//p: array of numbers
//r: a string with the corresponding ascii character
//e: p: [84,101,115,116]) r: 'Test', 'Convert those numbers to letters'
//p: fix the map method's call back function by passing num as the element
//   and then pass the element to String.fromCharCode() in order to convert 
//   a number to the corresponding ASCII character
