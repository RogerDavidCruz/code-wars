// 8 kyu - Lario and Muigi Pipe Problem
// https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript

pipeFix = (numbers) => {
  let start = numbers.shift();
  let end = numbers.pop();
  let pipes = []
  for(let i=start; i<=end; i++){
    pipes.push(i);
  }
  return pipes;
}

//prep

//p: array of numbers
//r: filled array of numbers with increments of 1
//e: [ 6, 9 ] => [6,7,8,9]
//p: the first element of the array is the start, and the last element of the param
//   array is the end. For loop and push a number into an empty array until the 
//   last element number value is met
