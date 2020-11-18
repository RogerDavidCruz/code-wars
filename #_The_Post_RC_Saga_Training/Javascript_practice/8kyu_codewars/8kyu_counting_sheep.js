// 8 kyu - Counting sheep...
// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

//Solution 1
function countSheeps(arrayOfSheep) {
  let count = 0;
  for(let i = 0; i<arrayOfSheep.length; i++){
    if(arrayOfSheep[i] === true){
      count++;
    }else{
      count;
    }
  }
  return count;
}

// prep description

// Consider an array/list of sheep where some sheep may be missing from their
// place. We need a function that counts the number of sheep present in the
// array (true means present).

// ------------------------------------------------------------------------------------------

//Solution 2

const countSheeps = arrayOfSheeps => arrayOfSheeps.filter(Boolean).length

//prep

//parameters --------> arrayOfSheeps is an array containing true and false values
//returns -----------> the number of times true exists in the parameter array
//example -----------> param: [true,  true,  true,  false,
//                            true,  true,  true,  true ,
//                            true,  false, true,  false,
//                            true,  false, false, true ,
//                            true,  true,  true,  true ,
//                            false, false, true,  true ]
//                     return: 17
//pseudo code -------> using ES6 syntax, we use the filter array method in js where
//                     we filter out all the false values using the Boolean object,
//                     the Boolean object has an initial value of false and therefore
//                     can use it inside the filter method to return an array with only
//                     true values, then we take the length of this new array to have
//                     the number of true values and return that number, while using 
//                     implicit ES6 syntax 
