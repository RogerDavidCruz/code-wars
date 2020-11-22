// 8 kyu - Simple multiplication
// https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

//prep

//parameters ------> a number that is even or odd
//return ----------> number multiplied by 8 or 9
//examples --------> param: 2 return: 16, param: 1 return: 9
//pseudo code -----> use a ternary operator and modulus 2 to determine
//                   if the value is even or not, and multiply the
//                   parameter by 8 if it's even (true) else by 9 if odd (false)
