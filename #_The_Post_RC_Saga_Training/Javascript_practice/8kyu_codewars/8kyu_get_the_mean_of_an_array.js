// 8 kyu - Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks){
  return Math.floor(marks.reduce((a,b) => a+b)/marks.length);
 }
 