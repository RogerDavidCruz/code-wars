// 8kyu - Generate range of integers
// https://www.codewars.com/kata/55eca815d0d20962e1000106/train/javascript

function generateRange(min, max, step){
  let list = [];
  for(let i = min; i<=max; i+=step){
    list.push(i)
  }
  return list;
}
