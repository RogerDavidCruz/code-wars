// 6 kyu - Split Strings
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

solution = (str) => {
  let finalArr=[];
  let splitChars = str.split('');
  for(let i = 0; i < splitChars.length; i += 2){
    finalArr.push(str.slice(i,i+2));
  }
  return finalArr.map(elem => elem.length === 1 ? elem +'_' : elem);
}

//PREP

//P: a string of characters
//R: an array of string two letters elements, if there are odd number of chars, replace with _
//E: 'abcdef' => ['ab', 'cd', 'ef'] or 'abc' => ['ab', 'c_']
//P: split the string into an array of characters, also declare an empty array, if the length of the array
//   is even then proceed with looping through the array at every two character intervals. In the loop slice
//   the original str with a start and end location being the start is the iteration "i" and ends right before 
//   the next two iterations beyond the current "i". Finally map through the array of all the elements, and use
//   a ternary operator to check if the element has only one character, then return the elem with a string 
//   underscore for the new array formed by the map method.
