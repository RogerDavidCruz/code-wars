//A Rule of Divisibility by 7
//https://www.codewars.com/kata/55e6f5e58f7817808e00002e/javascript

//A number m of the form 10x + y is divisible by 7 if and only if x − 2y is divisible by 7. In other words, subtract twice the last digit from the number formed by the remaining digits. Continue to do this until a number known to be divisible or not by 7 is obtained; you can stop when this number has at most 2 digits because you are supposed to know if a number of at most 2 digits is divisible by 7 or not.

//The original number is divisible by 7 if and only if the last number obtained using this procedure is divisible by 7.

//Examples:

//1) m = 371 -> 37 − (2×1) -> 37 − 2 = 35 ; thus, since 35 is divisible by 7, 371 is divisible by 7.

//Task:
//Your task is to return to the function seven(m) (m integer >= 0) an array (or a pair, depending on the language) of numbers, the first being the last number m with at most 2 digits obtained by your function (this last m will be divisible or not by 7), the second one being the number of steps to get the result.


seven = (m) => {
  let count = 0
  let number = m

  while ((number.toString()).length > 2) {
    count++
    number = Math.floor(number / 10) - ((number % 10) * 2)
  }

  return [number, count]
}
