function digital_root(n) {
  if(n === 0) return 0;
  let arrayOfStringNums = n.toString().split('');
  return arrayOfStringNums.reduce((cv, accum) => (parseInt(cv) + parseInt(accum)).toString().length === 1 ? (parseInt(cv) + parseInt(accum)) : (parseInt(cv) + parseInt(accum)).toString().split('').reduce((cv, accum) => parseInt(cv) + parseInt(accum)))
}

//PREP

//P: a number with multiple digits 
//R: a single digit number
//E: 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
//P: change the number to a string, then split the string into an array of elements,
//   then use the reduce method to add the string values while also converting them
//   to a number at each element in each iteration. Then check for the length of the 
//   number by changing it into a string, if the length is 1 then it is over and return
//   the string value as a number, if the length is not 1, repeat the process.
