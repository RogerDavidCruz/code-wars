// 8kyu - Be Concise IV - Index of an element in an array
// https://www.codewars.com/kata/5703c093022cd1aae90012c9/train/javascript
//
// Task
// Provided is a function find which accepts two parameters in the following
// order: array, element and returns the index of the element if found and
// "Not found" otherwise. Your task is to shorten the code as much as possible
// in order to meet the strict character count requirements of the Kata.
// You may assume that all array elements are unique.

function find(a, b) {
return a.indexOf(b) >= 0 ? a.indexOf(b) : "Not found";
}
