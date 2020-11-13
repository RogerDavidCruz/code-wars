// 8 kyu - Is there a vowel in there?
// https://www.codewars.com/kata/57cff961eca260b71900008f/solutions/javascript

function isVow(a){
  let showVowels = [];
  for(let i=0; i<a.length; i++){
    if(a[i] === 97){
      showVowels.push('a');
    }
    else if(a[i] === 101){
      showVowels.push('e');
    }
    else if(a[i] === 105){
      showVowels.push('i');
    }
    else if(a[i] === 111){
      showVowels.push('o');
    }
    else if(a[i] === 117){
      showVowels.push('u');
    }else{
      showVowels.push(a[i])
    }
  }
  return showVowels;
}

// prep

// parameters ---> a is an array of numbers(integers) 
// return -------> an array that contains numbers and string values for each number
//                 that is equal to a, e, i, o, and u based on the ASCII code (characters code)
//example --------> parameter: [101,121,110,113,113,103,121,121,101,107,103]
//                  return: ["e",121,110,113,113,103,121,121,"e",107,103]
//pseudo code ----> declared a variable as an empty array at the beginning
//                  for loop to iterate/go through the array.
//                  at each index of the array we check if the a[i] index equals the following
//                  numbers 97 = a , 101 = e, 105 = i, 111 = o, 117 = u
//                  a conditional if statement is used for each of these numbers
//                  if the index equals one of those 5 numbers, then push a string letter
//                  into the empty array declared at the beginning
//                  else just push the exisiting number in that index a[i] (don't swap it)
