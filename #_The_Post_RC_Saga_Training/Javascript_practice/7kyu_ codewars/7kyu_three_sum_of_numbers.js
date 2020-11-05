// 7 kyu - Beginner Series #3 Sum of Numbers
// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum(a,b){
  if(a === b) return a;
    let nums = []
    if(a < b){
      for(let i = a; i <= b; i++){
      nums.push(i)
      }
    }
  if(b < a){
    for(let i = b; i <=a; i++){
      nums.push(i)
    }
  }  
  if(nums.length != 0){
    return nums.reduce((accum, currentVal) => accum + currentVal);
  }
}

//prep

//else create an array that list the numbers from left to right
//if(a equals b) then return a
//if a is smaller than b, indicate to start the loop with a and end with b
//if b is smaller than a, indicate to start the loop with b and end with a
//push into an empty array inside the loop
//then if the array is not empty use reduce method to add all indexes of array
//return the sum of numbers from the array
