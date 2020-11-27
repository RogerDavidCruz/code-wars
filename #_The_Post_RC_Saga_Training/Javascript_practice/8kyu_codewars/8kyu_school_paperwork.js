// 8 kyu - Beginner Series #1 School Paperwork
// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript

function paperwork(n, m) {
  return n <= 0 || m <= 0 ? 0 : n*m;
}

//prep

//parameter ------> two numbers 
//return ---------> either zero or the two number parameters multiplied
//example --------> param: 5,5 return: 25
//pseudo code ----> using a ternary operator to return two possible outcomes
//                  if either n or m is less than or equal to zero return
//                  zero, otherwise return the multiplied value of the parameters
