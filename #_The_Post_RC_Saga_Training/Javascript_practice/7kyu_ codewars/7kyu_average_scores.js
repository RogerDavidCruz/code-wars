// 7 kyu - Average Scores
// https://www.codewars.com/kata/57b68bc7b69bfc8209000307/train/javascript

average = (scores) => Math.round(scores.reduce((acc, cv) => acc + cv) / scores.length)

//prep

//p: array of numbers
//r: average of array of numbers to nearest whole number
//e: [1,2,3,4,5] => 3
//p: reduce method can add up all the numbers and then divide the number by the
//   length of array which is the amount of numbers in array. Then use Math.round
//   to round to nearest whole integer
