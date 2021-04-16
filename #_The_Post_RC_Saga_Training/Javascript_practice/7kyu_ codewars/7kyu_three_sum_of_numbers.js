// 7 kyu - Beginner Series #3 Sum of Numbers
// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

//Approach #1

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

//Approach #2

getSum = (a,b) => {
  let count = 0;
 if(a === b){
   return a;
 }
  if(b > a){
    for(let i = a; i<=b; i++){
      count = count + i
    }
    return count;
  }
  else{
    for(let i = b; i<=a; i++){
      count = count + i;
    }
    return count;
  }
}

//prep

//parameter: a and b are two integers (negative or positive) 
//return: return 1 number and it's sum of all the numbers inbetween a and b
//example: GetSum(-2,3) == 3 // -2 + -1 + 0 + 1 + 2 + 3 = 3
//pseudo:  have a conditional if a === b then return a,
//         order a and b with (simple check if a > b or b < a)
//         populate the numbers in between (for loop)
//         return the sum