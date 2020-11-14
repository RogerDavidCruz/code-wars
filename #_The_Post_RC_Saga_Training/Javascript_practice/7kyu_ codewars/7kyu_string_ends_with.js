// 7 kyu - String ends with?
// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

function solution(str, ending){
  return str.endsWith(ending);
}

//prep

//parameter -----> str is a string, and ending is a string
//return --------> true or false 
//example -------> param: 'abcde', 'cde', return: true
//                 param: 'abcde', 'abc', return: false
//pseudo code ---> use endsWith javascript method for strings 