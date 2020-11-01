// 6 kyu - Counting Duplicates
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text){
  if(text.length === 0) return 0;
  let count = 0;
  let repeats = [];
  let splitSent = text.toLowerCase().split('')
  for(let i =0; i<splitSent.length; i++){
    for(let j = i+1; j<splitSent.length; j++){
      if(splitSent[i] === splitSent[j]){
        repeats.push(splitSent[i])
        let uniqueSet = Array.from(new Set(repeats))
        count = uniqueSet.length
      }
    }
  }
  return count
}

//prep

//two for loops 
//cross check index values between between each loop
//push the matched index values into a new array
//create a new array that filters out all the repeats
//check the length of the new array
//return this length which is the same as the count of duplicates
