// 6 kyu - Multiples of 3 or 5
// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
//
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Finish the solution so that it returns the sum of all the multiples of 3 or 5
// below the number passed in.

function solution(number){
  let count = 0;
  let sum = 0;
  for(let i=0; i<number; i++){
    let index = count++;
    if (index % 3 === 0 || index % 5 === 0){
      sum = sum + index;
    }
  }
  return sum;
}
