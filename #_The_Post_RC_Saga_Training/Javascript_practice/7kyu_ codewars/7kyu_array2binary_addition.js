// 7 kyu - Array2Binary addition
// https://www.codewars.com/kata/559576d984d6962f8c00003c/train/javascript

arr2bin = (arr) => {
    let nonNumbers = arr.filter(elem => typeof elem != 'number');
    if(arr.length === 0) return '0';
    if(nonNumbers.length != 0) return false;
    else{
      return arr.reduce((accum, cv) => accum + cv).toString(2);
    }
  }
  
  //PREP
  
  //P: an array that may contain integers, objects, a string, etc.
  //R: either the sum of all integers as a binary string or false
  //E: [1,2] ==> '11' or [1,2,'a'] ==> false
  //P: use the filter method to find reduce method with a ternary statement that checks if each value
  //   is an integer. If it is, continue to add the integers, if it is not return false as
  //   as an element in the array. Then use toString(2) to change the integer into binary
  //   or check if the array contains false to return false.
