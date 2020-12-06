// 7 kyu - Larger Product or Sum
// https://www.codewars.com/kata/5c4cb8fc3cf185147a5bdd02/train/javascript

const sumOrProduct = (array, n) => {
  const sortedArr = array.sort((a,b) => a-b)
  const product = sortedArr.slice(0,n).reduce((acc, cv) => acc * cv)
  const sum = sortedArr.slice(-n).reduce((acc, cv) => acc + cv)
  return sum === product ? 'same' : sum > product ? 'sum' : 'product';
}

//prep

//p: array and number
//r: a string "sum" or "product" or "same"
//e: param: [10, 41, 8, 16, 20, 36, 9, 13, 20], 3 return: "product"
//   param: [10, 20, 3, 30, 5, 4], 3 return: "same"
//          [3,4,5,10,20,30] // product: 3*4=12*5=60 // sum: 10+20=30+30=60
//p: declare two variables, one for sum and one for product. Then first sort 
//   the array from least to greatest for product variable, and largest to 
//   smallest for the sum variable. Then splice the array from 0 to nth
//   number. And use reduce with a callback functiont that adds for the sum
//   variable and multiplication for the product variable.
