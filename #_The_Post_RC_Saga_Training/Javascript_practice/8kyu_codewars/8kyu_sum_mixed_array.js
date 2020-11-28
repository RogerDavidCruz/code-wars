// 8 kyu - Sum Mixed Array
// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

function sumMix(x){
  return x.map(x => parseInt(x)).reduce((acc, cv) => acc+cv)
}

//prep

//parameter ------> an array of numbers as strings and numbers
//return ---------> a summed value of all the numbers in the array parameter
//example --------> param: [9, 3, '7', '3'] return: 22
//pseudo code ----> use map to change each element of the array into an number
//                  then use the reduce method to sum all elements in the array
