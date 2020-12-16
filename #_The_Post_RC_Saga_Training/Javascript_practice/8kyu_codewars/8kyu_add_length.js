// 8kyu - Add length
// https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript

const addLength = str => str.split(' ').map(word => `${word} ${word.length}`);

//prep

//p: a string
//r: array of strings with length of word
//e: 'apple ban' => ["apple 5", "ban 3"]
//p: use the split method on the string with a space to get an array
//   of elements with just the words. Then use map to return a new array
//   using template literal and checking the length of each element string
//   include that value in the template literal
