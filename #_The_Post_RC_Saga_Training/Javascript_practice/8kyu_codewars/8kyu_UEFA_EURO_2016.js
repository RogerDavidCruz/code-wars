// 8 kyu - UEFA EURO 2016
// https://www.codewars.com/kata/57613fb1033d766171000d60/train/javascript

function uefaEuro2016(teams, scores){
  if(scores[0] > scores[1]){
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
  }
  else if(scores[1] > scores[0]){
    return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
  }
  else{
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
  }
}

//prep

//p: array of strings, and array of numbers
//r: a string
//e: p: ['Germany', 'Ukraine'] r: [2, 0]
//p: check if the first array element using bracket notation is greater or less than
//   the second element number. Then based on that use template literall to return
//   different strings in each case. And if the numbers are the same, return a different
//   string representating a tie.