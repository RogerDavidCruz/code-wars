// 7 kyu - Dominant array elements
// https://www.codewars.com/kata/5a04133e32b8b998dc000089/train/javascript

const solve = (arr) => {
  let allDominantNums = [];
  for(let i = 0; i<arr.length; i++){
    let shortenList = arr.slice(i);
    if(Math.max(...shortenList) === arr[i]){
      allDominantNums.push(arr[i])
    } 
  }
  return allDominantNums.filter((value, index) => allDominantNums.indexOf(value) === index);
}

//prep

//param: array (all numbers > 0, and last element 
// in the array always included in return)
//return: a list/array all dominate elements
//example: param: [1,4,10,8,1] return: [10,8,1]
//         param: [1,5,2,7,9] return: [9]
//**note: comparing to all elements to the right (check)
//pseudo code: function, this declare variable as an empty array push method to push 
//             that element that is domminate conditional to check if an element is 
//             greater than all those to its right side. If so add element to array
//             return the new array that is formed. Plus another conditional to include 
//             last element (all conditions) use the filter method to remove duplicates 
//             by using the parameters of value and indexes in the callback function to 
//             see if the value of indexOf value in an array is strictly equal to the 
//             index of an element in the array.
