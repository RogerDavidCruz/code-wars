// 8kyu - Multiplication table for number
// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript

function multiTable(number) {
  let line = '';
  for(let i=1; i<=10; i++){
    if(i != 10){
      let product = i*number;
      line += `${i} * ${number} = ${product}\n`;
    }else{
      let product = i*number;
      line += `${i} * ${number} = ${product}`;
    }
  }
  return line;
}

//prep

//parameters ------> a number that is between 1 and 10
//return ----------> a string that is structured in the format of a multiplication table
//example ---------> param: 5
//                   return: 1 * 5 = 5
//                           2 * 5 = 10
//                           3 * 5 = 15
//                           4 * 5 = 20
//                           5 * 5 = 25
//                           6 * 5 = 30
//                           7 * 5 = 35
//                           8 * 5 = 40
//                           9 * 5 = 45
//                           10 * 5 = 50
//pseudo code -----> use a for loop using 1 as the beginning and 10 as the end of the loop.
//                   Within the for loop the parameter is multiplied by i the iteraction.
//                   after each iteration concat the string and include the \n line break
//                   return the finalized concatenated string. Also include a conditional 
//                   inside the for loop for the last iteration to not include \n.
