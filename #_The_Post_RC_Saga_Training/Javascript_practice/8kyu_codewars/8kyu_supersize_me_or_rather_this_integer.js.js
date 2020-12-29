// 8kyu - noobCode 01: SUPERSIZE ME.... or rather, this integer!
// https://www.codewars.com/kata/5709bdd2f088096786000008/train/javascript

const superSize = num => parseInt(num.toString().split('').sort((a,b) => b - a).join(''));

//prep

//p: an integer
//r: largest possible integer
//e: p: 123456 r: 654321
//p: change the number to a string, then use the sort method to arrange 
//   the numbers from largest to least, join the strings inside the array,
//   and have parseInt method change the string back to a number around the logic.
