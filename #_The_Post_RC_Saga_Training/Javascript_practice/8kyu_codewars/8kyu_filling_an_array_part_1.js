// 8 kyu - Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

const arr = N => {
  let filledNumbers = []
  if(typeof N === 'number'){
    for(let i=0; i<N; i++){
      filledNumbers.push(i)
    }
  }
  return filledNumbers;
}

//prep

//parameters: N is a number, sometimes a [] or not a number
//return: an array with filled numbers with 0 to the N-1 number
//example: param: N = 4
//         return: [0,1,2,3]
//pseudo code: declare empty array, make a conditional to check the data 
//             type of the parameter (N) then for loop, how many times you loop? 
//             loop N number of times and push each i (iteration) into 
//             the empty array variable, and return that
