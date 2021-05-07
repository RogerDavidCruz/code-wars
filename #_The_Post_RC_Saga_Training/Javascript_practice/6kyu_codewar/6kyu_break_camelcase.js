// 6 kyu - Break camelCase
// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

solution = (string) => string.split('').map((val, idx) => val.toUpperCase() === val ? " " + val : val).join('')

//PREP

//P: a string in camel case
//R: a string with spaces before each capital letter
//E: "rogerCruz" => "roger Cruz"
//P: split the string into an array of characters, then map through the array with a ternary
//   statement checking if a character is uppercased, those it equal to its previous version?
//   If so, then we add a space at the uppercase value into the array. Then join the string
//   together back again and return that value
