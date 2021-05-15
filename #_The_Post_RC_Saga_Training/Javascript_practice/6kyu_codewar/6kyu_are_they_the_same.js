// 6 kyu - Are they the "same"?
// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

comp = (array1, array2) =>{
  if(array1 === null || array2 === null) return false
  let newArray2 = array2.sort((a,b)=>a-b);
  let outcome = array1.map(elem => Math.pow(elem,2)).sort((a,b) => a-b)
  for(let i = 0; i<outcome.length; i++){
    if(newArray2[i] != outcome[i]){
      return false
    }
  }
  return true
}

//PREP

//P: two arrays of numbers
//R: true or false boolean
//E: a = [121, 144, 19, 161, 19, 144, 19, 11]  
//   b = [121, 14641, 20736, 361, 25921, 361, 20736, 361] => true
//P: First set a null case to check if either parameter is null return false.
//   Then sort the second array in order, and then use Math.pow on each element 
//   on the first array while using the map method. Next use a conditional inside
//   a for loop while iterating through both arrays and comparing each value. If
//   two elements do not equal the same, then return false, otherwise return true
//   outside the for loop.
