// 6 kyu - Count letters in string
// https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d/train/javascript

letterCount = (s) => {
  let counter = {};
  let charsArr = s.split('')
  for(let i = 0; i<charsArr.length; i++){
    let letter = charsArr[i]
    if(!counter[letter]){
      counter[letter] = 1
    }else{
      counter[letter] += 1
    }
  }
  return counter;
}

//PREP

//P: a string
//R: an object with key and value pairs for each lower case letter
//E: 'apple' => {"a": 1, "p": 2, "l": 1, "e": 1}
//P: first begin by declaring an empty object, then split the string into an 
//   an array of string letters. Next for loop through the array, initialized a variable
//   inside the for loop to represent the string element, and then check at each element if
//   the key exist in the object already using the new variable, if it does not, add it into 
//   the object using bracket notation and set its value to 1. If it does exist, increase the 
//   value by 1 for that key in the object.
