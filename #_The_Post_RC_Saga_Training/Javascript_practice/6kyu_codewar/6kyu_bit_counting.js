// 6kyu - Bit Counting
// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

// Solution 1

//prep

//change integer to binary using toString(2)
//split the string into an array
//filter only the 1s and check length of array

var countBits = function(n) {
  return n.toString(2).split('').filter(index => index === '1').length;
};

// Solution 2

//prep

//change integer to binary using toString(2)
//replace each '0' globally with empty string '' using regex
//check the new length of the string of bits


var countBits = function(n) {
  return n.toString(2).replace(/0/g,'').length;
};
