// 7 kyu - Evens times last
// https://www.codewars.com/kata/5a1a9e5032b8b98477000004/train/javascript

function evenLast(numbers) {
  if (numbers.length === 0){
    return 0
  }else{
    return numbers.reduce((acc, cv, index) => index % 2 === 0 ? acc + cv : acc) * numbers[numbers.length - 1];
  }
}

//prep

//p: array of numbers
//r: sum of all the numbers that are event and multiplied by the number in the last index
//e: [2,3,4,5] => 2+4 = 6 then 6*5 = 30
//r: use reduce method to some all the even numbers and then multiply sum by last index