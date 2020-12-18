// 8kyu - To square(root) or not to square(root)
// https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript

function squareOrSquareRoot(array) {
  return array.map(num => Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : Math.pow(num, 2));     
}

//prep
//p: array of numbers
//r: array of square rooted and squared numbers
//e: [4,3,9,7,2,1] -> [2,9,3,49,4,1]
//p: use a map method and a ternary operator to check if each element when square rooted is 
//   still an integer using Number.isInteger. If true then proceed to square root the number,
//   otherwise square the number by the power of 2.
