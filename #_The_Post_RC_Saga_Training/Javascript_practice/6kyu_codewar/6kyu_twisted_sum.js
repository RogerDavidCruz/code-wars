// 6 kyu - Twisted Sum
// https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f/train/javascript

twistedSum = (n) => {
  let nums = [];
  if(n < 10){
    for(let i = 1; i<=n; i++){
      console.log(i)
      nums.push(i)
    }
    return nums.reduce((cv, val) => cv + val)
  }
  if(n>=10){
    for(let i=1; i<=n; i++){
      if(i<10){
        nums.push(i) 
      }
      if(i>=10){
        nums.push(i.toString().split('').reduce((cv, accum) => parseInt(cv) + parseInt(accum)))
      }
    }
  }
  return nums.reduce((cv, val) => cv + val)
}

//PREP

//P: A number with one or multiple digits
//R: one number representing a sum value
//E: n = 10 => 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46
//P: if n is a single digit, then for loop starting from 1 to n and push
//   each value into an empty array. Then use the reduce method to get the sum.
//   if n has more than one digit, do the same until 9, then from 10 onward
//   turn the number into a string, and split the string, and then parseInt each
//   element and add these numbers together and finally push it into the array.
//   then finally use the reduce method again to get the total sum
