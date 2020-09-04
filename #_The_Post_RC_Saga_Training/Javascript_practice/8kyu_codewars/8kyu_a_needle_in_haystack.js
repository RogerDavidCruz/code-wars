// 8 kyu - A Needle in the Haystack
// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript

function findNeedle(haystack) {
  const isNeedle = (element) => element === 'needle';
  if(haystack.find(isNeedle)){
    let listIndex = haystack.findIndex(isNeedle);
    return `found the needle at position ${listIndex}`;
  }
}
