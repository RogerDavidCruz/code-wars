// 8 kyu - Convert number to reversed array of digits
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

function digitize(n) {
  return n.toString().split('').reverse().join('').split('').map(x => parseInt(x));
}
