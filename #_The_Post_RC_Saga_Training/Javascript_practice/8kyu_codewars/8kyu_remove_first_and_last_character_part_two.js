// 8 kyu - Remove First and Last Character Part Two
// https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript

//Solution #1
function array(arr){
  const arrChars = arr.split(',')
  if(arrChars.length >= 3){
    arrChars.pop()
    arrChars.shift()
  }else{
    return null;
  }
  return arrChars.join(' ')
}

//Solution #2
const array = arr => arr.split(',').slice(1,-1).join(' ') || null;

//prep

//p: a string of characters
//r: a string that removed the first and last element of the parameter array
//   or null instead if it's an empty array or insufficient elements
//e: ['1,2,3'] => '2'
//p: #1) use the split method to make each element individual, then use the pop
//   and shift methods to remove the first element if the array is of length
//   of 3 or greater, and return new joined array or otherwise return null.
//   #2) use the split method with a comma string as a parameter and then
//   use the slice method with two parameters, 1 indicating the first element 
//   of the array and -1 as the last element in the array, and finally use the
//   join method with a string with open space to return the final string.
