// 8 kyu - Number toString
// https://www.codewars.com/kata/53934feec44762736c00044b/train/javascript

var a = parseInt(123).toString();

//prep

//Bug question: the original 123 was not a number type, and therefore needed
//              a parseInt to make sure it's type number and then proceded with
//              the existing toString() method
//Original code: var a = 123.toString();

//Other Potential Solutions:
// var a = 123..toString();
// var a = 123 .toString()
// var a = (123).toString();
// var a = 123 + '';