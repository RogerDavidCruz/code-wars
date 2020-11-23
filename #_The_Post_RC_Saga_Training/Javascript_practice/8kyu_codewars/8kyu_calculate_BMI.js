// 8 kyu - Calculate BMI
// https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript

function bmi(weight, height) {
  let BMIresult = weight/(height*height);
  if(BMIresult <= 18.5){
    return "Underweight";
  }
  if(BMIresult <= 25.0){
    return "Normal";
  }
  if(BMIresult <= 30.0){
    return "Overweight";
  }
  else{
    return "Obese";
  }
}

//prep

//parameters -------> two numbers for weight and height
//return -----------> a string indicating their BMI status
//examples ---------> param: 80, 1.80 return: "Normal"
//pseudo code ------> declare a variable with the BMI calculated
//                    then check this variable in conditional statements
//                    and return the appropiate BMI status base on their
//                    calculated BMI
