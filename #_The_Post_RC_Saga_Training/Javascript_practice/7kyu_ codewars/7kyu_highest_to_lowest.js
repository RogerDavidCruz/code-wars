// 7 kyu - Highest and Lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
//
// In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.

function highAndLow(numbers){
  let intoArray = numbers.split(' ');
  if(intoArray.length === 1){
    return numbers + ' ' + numbers;
  }
  let orderedArray = intoArray.sort((a,b) => a-b);
  let largest = orderedArray.pop();
  let smallest = orderedArray.shift();
  let highestToLowest = largest + ' ' + smallest;
  return highestToLowest;
}
