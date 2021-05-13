// 6 kyu - Count characters in your string
// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

count = (string) => {  
  let counter = {};
  for(let i = 0; i<string.split('').length; i++){
    let char = string.split('')[i]
   if(!counter[char]){
     counter[char] = 1
   }else{
     counter[char]++
   }
  }
  return counter;
}

//PREP

//P: a string 
//R: an object with key and value properties
//E: 'aba' => {'a': 2, 'b': 1}
//P: create an empty object, then split the string into an array of characters,
//   then loop through the array. Next define the key of one instance in the 
//   object and then check if this key already exist in the object with a conditional.
//   If the key does not exist for this character then set it's value to 1 with using
//   the bracket notation on the object. Versus if it does exist, then increase the
//   value of that key instance by one.
