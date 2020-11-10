// 7 kyu - Ones and Zeros
// https://www.codewars.com/kata/578553c3a1b8d5c40300037c

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''),2);
};

//prep

//parameters -----> arr is an array of ones and zeros representing a binary number
//return ---------> decimal conversion of the binary number param after arr indexes are joined
//examples -------> parameter: [0,0,0,1]
//                  return: 1
//pseudo code ----> use the join method to put together the indexes of the array into
//                  a unified string, then use the parseInt method with a radix of 2
//                  since binary numbers have a radix of 2 due to only containing 0s and 1s
//                  around the newly joined string to change it to an integer
