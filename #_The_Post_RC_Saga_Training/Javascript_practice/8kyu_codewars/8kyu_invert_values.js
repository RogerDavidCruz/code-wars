// 8 kyu - Invert values
// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

function invert(array) {
  return array.map(x => x === -x ? x : -x);
}

