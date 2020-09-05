// 8 kyu - Logical calculator
// https://www.codewars.com/kata/57096af70dad013aa200007b/train/javascript

function logicalCalc(array, op){
  switch(op){
    case 'AND':
      return array.reduce(reducerForAND)
    case 'OR':
      return array.reduce(reducerForOR)
    case 'XOR':
      return array.reduce(reducerForXOR)
  }
}

const reducerForAND = (accumulator, currentValue) => accumulator && currentValue;
const reducerForOR = (accumulator, currentValue) => accumulator || currentValue;
const reducerForXOR = (accumulator, currentValue) => accumulator !== currentValue;
