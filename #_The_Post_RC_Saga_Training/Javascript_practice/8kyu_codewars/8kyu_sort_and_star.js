// 8 kyu - Sort and Star
// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript

const twoSort = s => s.sort().shift().split('').join('***');

//prep

//p: array of strings
//r: string of the first element in the array with **** between each character
//e: ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]
//   'b***i***t***c***o***i***n' 
//p: sort the array of strings using the sort method, then shift the first element
//   of the array using the shift method. Then split the string and then join the string
//   with the "***" in between by passing it as a parameter.
