// 8 kyu - Beginner - Reduce but Grow
// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

const grow = x => x.reduce((acc, cv) => acc * cv);

//prep

//p: array of integers
//r: one integer
//e: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
//p: use the reduce method and in the call back function
//   multiply the accumulator and current value.
