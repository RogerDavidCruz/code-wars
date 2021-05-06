// 6 kyu - String Breakers
// https://www.codewars.com/kata/59d398bb86a6fdf100000031/train/javascript

function stringBreakers(n, string){
  let stringWithNoSpaces = string.split(' ').join('');
  return stringWithNoSpaces.split('').map((val, idx) => idx % n === 0  && idx != 0 ?  "\n" + val : val).join('');
}

//PREP

//P: a number and a string
//R: seperated strings with the value length of n
//E: N = 5; String = "This is an example string" => 
//   'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'
//P: Use the split and join method to remove the white spaces inside the string.
//   Then use a map method with a ternary operator to insert an element with a "\n" and the 
//   current element when element is divisible by N with a remainder of 0. Then finally
//   join the array back into a string.
