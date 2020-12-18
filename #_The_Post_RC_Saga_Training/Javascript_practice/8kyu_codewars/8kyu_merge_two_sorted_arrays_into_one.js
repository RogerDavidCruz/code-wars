// 8 kyu - Merge two sorted arrays into one
// https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript

const mergeArrays = (arr1, arr2) => {
  const combinedArr = arr1.concat(arr2).sort((a,b) => a - b);
  return combinedArr.filter((num, idx) => combinedArr.indexOf(num) === idx)
}

//prep

//p: two arrays
//r: one sorted and combined array
//e: p: [1,2,3,4], [5,6,7,8] r: [1,2,3,4,5,6,7,8]
//p: use concat method to combined the two arrays and then sort to organize the 
//   numbers from least to greatest. Then use the filter and indexOf methods to 
//   remove all duplicates through the filter's call back function.
