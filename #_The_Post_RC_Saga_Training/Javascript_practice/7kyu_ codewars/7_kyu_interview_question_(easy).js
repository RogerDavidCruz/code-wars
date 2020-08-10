// https://www.codewars.com/kata/5b358a1e228d316283001892/train/javascript
// 7 kyu - Interview Question (easy)
//
// You receive the name of a city as a string, and you need to return
// a string that shows how many times each letter shows up in the string
// by using an asterisk (*).
//
// For example:
//
// "Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
// As you can see, the letter c is shown only once, but wih 2 asterisks.
//
// The return string should include only the letters (not the dashes, spaces,
//   apostrophes, etc). There should be no spaces in the output, and the different
//   letters are separated by a comma (,) as seen in the example above.
//
// Note that the return string must list the letters in order of their first
// appearence in the original string.
//
// More examples:
//
// "Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
// "Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"
// Have fun! ;)

function getStrings(city){
  let array=[];
  let object={};
  city.split('').forEach(x=>x != ' ' ? array.push(x.toLowerCase()):'')
  array.map(e => !object[e] ? object[e] = '*': object[e] += '*')
  return JSON.stringify(object).replace(/["{}]/g,'')
}
