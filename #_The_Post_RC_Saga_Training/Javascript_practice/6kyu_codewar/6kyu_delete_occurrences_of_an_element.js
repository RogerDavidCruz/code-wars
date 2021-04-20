// 6 kyu - Delete occurrences of an element if it occurs more than n times
// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

function deleteNth(arr,n){
  let answerObj = {}
  let answerArray = []
  for(let i=0; i<arr.length; i++){
    const index = arr[i];
    if(!answerObj[index]){ //if object key doesn't exist, create key with value of 1
      answerObj[index] = 1
      answerArray.push(index)
    }else{
      answerObj[index]++ //else increase value by 1
      if(answerObj[index] <= n){ //value of object is less than or equal to occurences
        answerArray.push(index)
      } 
    }
  }
  return answerArray;
}

//prep

//p: an array of numbers, and n is a number
//r: a shorter array of numbers
//e: [20,37,20,21],1 =>  [20,37,21]
//p: create an empty answer object
//   create an empty answer array
//   loop through the parameter array
//       if object does not have the key   //the key is the element in array
//       then object[key] = 1 
//             push this element into answer array
//       if object does contain the key
//       then object[key]++
//             if object[key] <= n 
//             then push the element into the array