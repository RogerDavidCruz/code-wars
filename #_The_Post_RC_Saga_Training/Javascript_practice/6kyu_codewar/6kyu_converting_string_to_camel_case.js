// 6 kyu - Convert string to camel case
// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

toCamelCase = (str) => {
  let convertStr = '';
  if(str.length === 0) return ''
  if(str.includes('_')){
    convertStr = str.split('_');
  }
  if(str.includes('-')){
    convertStr = str.split('-');
  }
  return convertStr.map((elem,idx) => idx === 0 ? elem : elem.charAt(0).toUpperCase().concat(elem.slice(1, elem.length))).join('');
}

//PREP

//P: a string
//R: a string in camel case
//E: "The_Stealth_Warrior" =>"TheStealthWarrior" or 
//   "the-stealth-warrior" =>"theStealthWarrior"
//P: if the string has underscores, then split the string by the underscores,
//   or by the dashes into an array of strings. Then chartAt the first character
//   of each element. And check with a conditional if the first letter was capitalized
//   or not. Make them all uppercase first letter, and simply return the first element
//   as is because whether it is with a first character lowercase or uppercase, it stays
//   the same when joined together. 
