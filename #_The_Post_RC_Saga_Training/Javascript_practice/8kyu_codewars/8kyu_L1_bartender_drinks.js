// 8 kyu - L1: Bartender, drinks!
// https://www.codewars.com/kata/568dc014440f03b13900001d/train/javascript

//APPROACH #1

function getDrinkByProfession(param){
  let fixedParam = param.toLowerCase()
  if(fixedParam === "jabroni"){
    return "Patron Tequila";
  }
  if(fixedParam === "school counselor"){
    return "Anything with Alcohol";
  }
  if(fixedParam === "programmer"){
    return "Hipster Craft Beer";
  }
  if(fixedParam === "bike gang member"){
    return "Moonshine";
  }
  if(fixedParam === "politician"){
    return "Your tax dollars";
  }
  if(fixedParam === "rapper"){
    return "Cristal"
  }
  else{
    return "Beer"
  }
}

//PREP

//P: a string input
//R: a string response output depending on the parameter passed
//E: "Rapper" => "Cristal"
//P: use the lowercase method on the param and then check if the input is a certain word
//   if the certain word is passed then output its respective string


//APPROACH #2 (Recommended)

function getDrinkByProfession(param){
  let fixedParam = param.toLowerCase()
  
  switch (fixedParam){
      case "jabroni" : return "Patron Tequila";
      case "school counselor" : return "Anything with Alcohol";
      case "programmer" : return "Hipster Craft Beer";
      case "bike gang member" : return "Moonshine";
      case "politician" : return "Your tax dollars";
      case "rapper" : return "Cristal";
      default : return "Beer";
  }
}

//PREP

//P: a string
//R: a string based on the parameter passed
//E: "politician" => "Your tax dollars"
//P: use the toLowerCase method to change all the string characters to lowercase letters.
//   Then use a switch case for each parameter conditiion passed and return its respective
//   output, otherwise default return just "Beer".
