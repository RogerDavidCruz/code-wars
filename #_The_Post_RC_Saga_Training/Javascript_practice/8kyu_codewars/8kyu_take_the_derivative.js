// 8 kyu - Take the Derivative
// https://www.codewars.com/kata/5963c18ecb97be020b0000a2/train/javascript

function derive(coefficient,exponent) {
  let product = (coefficient * exponent).toString();
  let newExponent = (exponent - 1).toString();
  return `${product}x^${newExponent}`;
}