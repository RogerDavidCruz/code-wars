// 7 kyu - Categorize New Member
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

function openOrSenior(data){
  return data.map((member) => member[0] >= 55 && member[1] > 7 ? "Senior" : "Open");
}

//prep

//parameter -----> data is an array of arrays with each array index item having two integers
//return --------> an array of strings with either "open" or "senior"
//examples ------> parameter: [[45, 12],[55,21],[19, -2],[104, 20]]
//                 return: ['Open', 'Senior', 'Open', 'Senior']
//pseudo code ---> use map to run a callback function of checking first index of an array
//                 to see if both conditions are true, age is 55 or older (index 0)
//                 and handicap is larger than 7 (index 1) of each indexes of the large array
