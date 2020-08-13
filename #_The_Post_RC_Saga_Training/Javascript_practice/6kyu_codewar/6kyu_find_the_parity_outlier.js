// 6 kyu - Find The Parity Outlier
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
//
// You are given an array (which will have a length of at least 3, but could
// be very large) containing integers. The array is either entirely comprised
// of odd integers or entirely comprised of even integers except for a single
// integer N. Write a method that takes the array as an argument and returns
// this "outlier" N.

function findOutlier(integers){
  let evenFilter = integers.filter(integers => integers % 2 === 0);
  let oddFilter = integers.filter(integers => integers % 2 !== 0);
  return evenFilter.length === 1 ? evenFilter[0] : oddFilter[0];
}

//Notes
// - array
// - all odd with one even (N) or all even with one odd (N)
// - return (N)
