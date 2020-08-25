// 7 kyu - Mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
//
// This time no story, no theory. The examples below show you how to
// write function accum:

function accum(s) {
  return s.split('').map((value, index) => (value.toUpperCase() + value.toLowerCase().repeat(index))).join('-');
}
