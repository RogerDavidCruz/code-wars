// 8 kyu - Arguments to Binary addition
// https://www.codewars.com/kata/57642a90dee2da8dd3000161/train/javascript

//Solution #1
const arr2bin = arr => {
  arr = arr.filter(x => typeof x === 'number');
  if(arr.length === 0 || arr.includes(null)){
    return '0';
  }
  else if(arr.includes(NaN)){
    return 'NaN';
  }else{
    return arr.reduce((acc, cv) => acc + cv).toString(2);
  }  
}

//Solution #2
const arr2bin =  arr => arr.reduce((acc, cv) => acc + (typeof cv === 'number' ? cv : 0), 0).toString(2);

//prep

//p: array
//r: binary string
//e: [1,2,'a'] => '11'
//p: #1) first filter the array for only numbers, then have conditionals to check for
//   an empty array, null elements and NaN elements. Return the respective '0' or 
//   'NaN'. Then lastly after all other conditions return the binarry string of all
//   numbers in the array by using the reduce method to add all numbers and
//   toString(2) to change an integer to a binary string.
//   #2) use the reduce method on the array and add each element only if it passes
//   the ternary operator check if the element is a number, otherwise add 0 instead.
//   Also state to start at zero index inside the reduce method and toString(2) to
//   change the integer to binary string.
