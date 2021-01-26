// 8 kyu - Count by X
// https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

const countBy = (x, n) => {
  const z = [];
  for(let i = 1; i<=n; i++){
    z.push(x*i)
  }
  return z;
}

//prep

//p: n is length of the array and x is the multiples
//r: an array of the first n multiples of x
//e: countBy(2,5) === [2,4,6,8,10]
//   countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
//p: for loop and add at each iteration to the empty array multiples of x
