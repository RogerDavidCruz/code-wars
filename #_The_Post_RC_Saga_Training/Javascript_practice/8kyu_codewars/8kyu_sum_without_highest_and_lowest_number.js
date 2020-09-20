// 8 kyu - Sum without highest and lowest number
// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

function sumArray(array) {
  if(array === null || array.length < 3) return 0
  else{
    array.sort((a,b) => a-b).pop();
    array.shift();
    return array.reduce((a,b) => a + b);
  }
}

