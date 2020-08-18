// 6 kyu - Find the odd int
// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
//
// Given an array of integers, find the one that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  let count = 0;
  let finalArray = [];
  let index = 0;
  for(let i=0; i<A.length; i++){
    let x = A[i];
    for(let j=0; j<A.length; j++){
      if(x == A[j]){
        count++;
      }
    }
    finalArray.push(count)
  }
  for(let i=0; i<finalArray.length; i++){
    if(finalArray[i] % 2 != 0){
      index = i;
      break;
    }
  }
  return A[index]
}
