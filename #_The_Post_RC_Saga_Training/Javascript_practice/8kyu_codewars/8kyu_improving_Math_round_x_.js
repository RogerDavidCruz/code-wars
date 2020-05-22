// 8 kyu - Improving Math.round(x)
// https://www.codewars.com/kata/56be025f9347a066c7000e4f/train/javascript

Math.roundTo = function (number, precision) {
  return parseFloat(number.toFixed(precision));
}
