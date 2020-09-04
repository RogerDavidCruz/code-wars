// 6 kyu - Sum of Digits / Digital Root
// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digital_root(n) {
  if (n < 10) return n;
  return digital_root(
    n.toString().split('').reduce((acc, digit) => acc + +digit, 0)
  );
}
