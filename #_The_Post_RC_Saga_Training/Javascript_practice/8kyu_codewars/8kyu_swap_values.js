// 8kyu - Swap Values
// https://www.codewars.com/kata/5388f0e00b24c5635e000fc6/train/javascript

function swapValues() {
  var args = Array.prototype.slice.call(arguments)[0];
  var temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}

//prep

//debug: args initially contained a sub array, by adding [0]
//       we target only the sub array and it's values for the
//       later lines or reassigning values.
