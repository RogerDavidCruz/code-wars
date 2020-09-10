// 8 kyu - Count the Monkeys!
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/javascript

function monkeyCount(n) {
  let listOfNums = n.toString().split(' ').map(x => parseInt(x));
  for(let i = 0; i = n; i++){
    n -= 1
    listOfNums.unshift(n)
  }
  if(listOfNums[0] === 0){
    listOfNums.shift()
  }
  return listOfNums;
}