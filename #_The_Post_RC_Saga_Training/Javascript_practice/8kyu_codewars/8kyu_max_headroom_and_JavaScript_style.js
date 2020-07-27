// https://www.codewars.com/kata/52a47dd7e950edabfa000391/train/javascript
// 8 kyu - Max Headroom and JavaScript style
//
// Shouldn't the two functions getMax1 and getMax2 be equivalent
// and return the same value? Can you spot a problem and fix it?
// Can you learn something about JavaScript style in this kata?


// Solution Talk - The return line in JavaScript must not be alone

function getMax1()
{
  var max =
  {
   name: 'Max Headroom'
  }
  return max;
}

function getMax2()
{
  return {
    name: 'Max Headroom'
  }
}
