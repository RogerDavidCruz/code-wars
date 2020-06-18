// 8 kyu - I love you, a little , a lot, passionately ... not at all
// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/solutions/javascript

//Solution # 1
const howMuchILoveYou = nbPetals => {
  const arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
  for(let i = 0; i<nbPetals; i++){
    arr.push(arr[i]);
  }
  return arr[nbPetals-1];
}

//Solution # 2
const howMuchILoveYou = nbPetals => {
  let petals = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
  return petals[(nbPetals-1) % 6];
}

//prep

//p: an integer
//r: a string
//e: p: 7 r: "I love you"
//p: #1) create an array with all the strings that can be potentially returned
//   then use a for loop and iterate the number of times equal to the parameter
//   which is number of petals. In each iteration, push a new element string 
//   into the original array. Then return outside the for loop the element value
//   of the nbPetals minus one because arrays start with index 0.
//   #2) create an array of all the strings potentially returned. Then return
//   the element which has an index of the number of pedals minus 1 (because arrays
//   start with an index of 0) divided by modulus 6, which returns the remainder of
//   of the parameter divided by 6. This would select the element to return.
