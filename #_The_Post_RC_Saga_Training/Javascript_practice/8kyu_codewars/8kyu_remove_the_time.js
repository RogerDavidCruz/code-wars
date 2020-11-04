// 8 kyu - Remove the time
// https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e/train/javascript

function shortenToDate(longDate) {
  return longDate.split(' ').slice(0,3).join(' ').replace(',','');
}

//prep

//split string into array of indexes
//splice the array to no longer include the time index
//join the array of characters
//replace the comma with empty string
