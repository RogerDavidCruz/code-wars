// 8kyu - Exclamation marks series #1: Remove a exclamation mark from the end of string
// https://www.codewars.com/kata/57fae964d80daa229d000126/train/javascript

function remove(s){
  return s.split('').pop() === '!' ? s.split('').slice(0,(s.length-1)).join('') : s;
}
