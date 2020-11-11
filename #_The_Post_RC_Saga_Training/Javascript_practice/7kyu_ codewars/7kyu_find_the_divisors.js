// 7 kyu - Find the divisors!
// https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript

function divisors(integer) {
  let arrayOfDivisors = []
  for(let i = 0; i<= integer ; i++){
    if(integer % i == 0 && i != 1 && i != integer){
      arrayOfDivisors.push(i)
    }
  }
  return arrayOfDivisors.length === 0 ? `${integer} is prime` : arrayOfDivisors;
}

//prep

//parameters -----> integer is a positive number 
//return ---------> an array of all integer's divisors, excluding 1 and integer itself,
//                  but if it is prime it returns "(integer) is prime"
//examples -------> 1) parameter: 15, return: [3,5], 2) parameter: 13, return: "13 is prime"       
//pseudo code ----> declare an empty array, then use a for loop with the condition set by the 
//                  integer parameter, for each iteration check if it's % i === 0 to see if 
//                  it has factors, else prime,also push each i factor number into the empty 
//                  declared array that fits the conditions of i not being 1 or the paramater integer.
