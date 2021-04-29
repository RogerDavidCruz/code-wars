// 7 kyu -JavaScript Array Filter
// https://www.codewars.com/kata/514a6336889283a3d2000001/train/javascript

getEvenNumbers = (numbersArray) => numbersArray.filter(val => val % 2 === 0)

//PREP

//P: an array of numbers with both odd and even 
//R: an array with only even numbers
//E: [1,2,3,4] => [2,4]
//p: use the .filter method and pass in a call back function that takes in 
//   one parameter needed only that val. Which is checked if it's even
//   using modulus 2 with a remainder of 0, for every element in the array.
