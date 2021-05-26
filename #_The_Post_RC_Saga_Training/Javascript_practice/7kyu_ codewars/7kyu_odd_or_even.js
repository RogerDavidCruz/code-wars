// 7 kyu - Odd or Even?
// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

oddOrEven = (array) => {
    if(array.length === 0) return "even";
    let sum = array.reduce((accum, cv) => accum + cv);
    if(sum % 2 === 0){
      return "even"
    }else{
      return "odd"
    }
  }
  
  //PREP
  
  //p: an array of numbers or empty
  //R: a string either odd or even
  //E: [0, 1, 4] => 'odd'
  //P: first check if the array is empty, if so return 'even'. Next
  //   use the reduce method to add all the values and then the modulus
  //   operator to check if it's odd or even number.
  