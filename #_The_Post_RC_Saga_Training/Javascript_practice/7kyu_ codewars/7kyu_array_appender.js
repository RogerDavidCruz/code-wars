// 7 kyu - Array Appender
// https://www.codewars.com/kata/53a8a476947277a3020001cc/train/javascript

// Write a function called appendArrays that appends the items from array 2 onto array 1, returning the newly formed array.
//
// For example if your 2 arrays were:
//
// var array1 = [a,b,c]
// var array2 = [1,2,3]
// After using your appendArrays function, the result should be [a,b,c,1,2,3]
//
// Your function should also be able to handle nested arrays.
//
// For example, combining array [['x','x'],'B'] with array ['c','D'] should return [['x','x'],'B','c','D'].
//
// Your solution should account for a situation for either the first or second inputs aren't actually arrays.

function appendArrays (arr1, arr2) {
return arr1.concat(arr2)
}
