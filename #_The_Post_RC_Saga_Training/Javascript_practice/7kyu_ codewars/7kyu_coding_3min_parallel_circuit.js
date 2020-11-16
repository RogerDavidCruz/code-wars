// 7 kyu - Coding 3min : Parallel circuit
// https://www.codewars.com/kata/571654c3347e6533fa00186b/train/javascript

function resistance(arr){
  let sumPreRes = arr.map(x => x.reduce((ac, cv) => ac+cv));
  return parseFloat((1/(sumPreRes.map(x => 1/x).reduce((ac, cv) => ac+cv))).toFixed(2));
}

//prep

//parameter -------> arr is an array with sub arrays
//return ----------> integer indicating the total resitance
//example ---------> param: [[1],[1]], return: 0.5, Calculation: R = 1/(1/1+1/1)= 0.5
//                   param: [[1],[2,3]], return: 0.833, Calculation: R = 1/(1/1+1/5)= 0.83
//pseudo code -----> map through the array and reduce the indexes of each sub array to a sum value
//                   use that sum value to add the reciprocal and then have toFiexed to two decimals
//                   also need to use parseFloat to change the string into a number
//                   the use of map and reduce twice was to reduce the sub arrays and then get the final sum

