// 8 kyu - Find the first non-consecutive number
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

//Solution #1
function firstNonConsecutive (arr) {
  for(let i = 0; i<arr.length-1; i++){
    if(arr[i]+1 != arr[i+1]){
      return arr[i+1];
    }
  }
  return null;
}

// Solution #2
const firstNonConsecutive = arr => {
  const result = arr.find((value, index) => value != index + arr[0]);
  return Number.isInteger(result) ? result : null;
}

//prep

//p: array of numbers that is consecutive or not
//r: a number, when it is not consecutively increasing by 1 or null if not found
//e: p: [1,2,3,4,6,7,8] r: 6
//p: #1) Use a for loop with iterating one less than the length of the array since inside
//   the for loop you will have a conditional check for if the next element does not
//   have the same value as current element in the iteration plus one. If that's true
//   return the following element in the iteration since that will not be the consecutive
//   number. Otherwise, return null outside the for loop.
//   #2) Use the find method, and in the callback have a conditional check that sees if 
//   the current value does not equal to the initial element of the array plus the index,
//   since the index is the number that the first element should have increased by if 
//   all numbers are consecutive. If a number is found, return the number otherwise it's 
//   undefined and return null instead.
