// 7 kyu - Replace all items
// https://www.codewars.com/kata/57ae18c6e298a7a6d5000c7a/train/javascript

function replaceAll(seq, find, replace) {
  if(seq.length === 0) return []
  let finalArr = [];
  for(let i =0; i<seq.length; i++){
    if(seq[i] === find){
      finalArr.push(replace)
    }else{
      finalArr.push(seq[i])
    }
  }
  if(typeof finalArr[0] === 'string'){
    return finalArr.join('');
  }else{
    return finalArr;
  }
}

//prep

//Parameters -----> three params, one is an array, and two are numbers
//Returns --------> a new array of replaced numbers
//Examples -------> param: [1,2,2], 1, 3 return: [3,2,2]
//                  param: [5,6,5], 6, 9 return: [5,9,5]
//Pseudo Code ----> create a conditional to check if the array is empty first
//                  if it's empty return 0. Then declare a variable as an empty
//                  array. Then use a for loop with a conditional to replace all
//                  elements in the array based on the parameters passed. Next
//                  pushed this new number element into the empty array or keep
//                  the element the same. Now add a final conditional to check 
//                  if the elements were strings, therefore join the array,
//                  otherwise only return the array with numbers.
