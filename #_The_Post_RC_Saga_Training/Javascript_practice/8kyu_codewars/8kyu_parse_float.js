// 8 kyu - Parse float
// https://www.codewars.com/kata/57a386117cb1f31890000039/train/javascript

function parseF(s) {
  if (Number.isNaN(parseFloat(s))) {
    return null
  } else {
    return parseFloat(s)
  }
}