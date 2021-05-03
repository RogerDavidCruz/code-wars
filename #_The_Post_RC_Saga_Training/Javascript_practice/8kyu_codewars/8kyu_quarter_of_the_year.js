//Attempt # 1

// 8 kyu - Quarter of the year
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript

const quarterOf = (month) => {
  if(month === 1 || month === 2 || month === 3){
    return 1
  }
  if(month === 4 || month === 5 || month === 6){
    return 2
  }
  if(month === 7 || month === 8 || month === 9){
    return 3
  }
  if(month === 10 || month === 11 || month === 12){
    return 4
  }
}

//PREP

//P: month is a number parameter passed between 1 and 2
//R: a number depending on the parameter
//E: month = 2 (February) => 1
//P: use if conditions between 1 to 12 and different output numbers returned 
//   based on what quarter the month lands in. Such as: the first three months 
//   are in the first quarter, therefore return 1


//Attempt # 2

const quarterOf = (month) => Math.ceil(month/3)

//PREP

//P: a number
//R: a number
//E: 4 => 2
//p: devide the number of months by 3 to geet the quarter of the year. And
//   then use Math.ceil to round up to the closest whole integer
