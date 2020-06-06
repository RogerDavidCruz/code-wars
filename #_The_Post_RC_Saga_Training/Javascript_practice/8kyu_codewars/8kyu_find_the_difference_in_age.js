// 8 kyu - Find the Difference in Age between Oldest and Youngest Family Members
// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript

function differenceInAges(ages){
  let orderedList = ages.sort((a,b) => a-b);
  let youngest = orderedList.shift();
  let oldest = orderedList.pop();
  let difference = oldest - youngest;
  return [youngest, oldest, difference];
}
