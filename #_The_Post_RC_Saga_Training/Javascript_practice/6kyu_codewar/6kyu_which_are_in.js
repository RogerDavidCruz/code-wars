// 6 kyu - Which are in?
// https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript

const inArray = (array1,array2) => array1.filter(subStr => array2.some(word => word.indexOf(subStr) > -1)).sort();

//prep

//parameters -----> two arrays, one being a sub array of the other
//return ---------> one array, where the sub array elements matches were found in the larger array
//examples -------> param: [ 'xyz', 'live', 'strong' ] [ 'lively', 'alive', 'harp', 'sharp', 'armstrong' ]
//                  return: [ 'live', 'strong' ]
//pseudo code ----> call the filter on the sub array, since we want to return an array
//                  that contains these sub strings elements in the larger array. If it's
//                  not found, then it shouldn't be returned in the final array. Next
//                  the filter's call back function should use the some method on array2
//                  to check if the comparision statement is true or not regarding if the 
//                  substring exist or not. IndexOf helps here because if it doesn't exist
//                  then the value of -1 is return, if it does exist a number greater than -1
//                  should appear since indexes are 0 or greater. Then finallly use the sort method
//                  to arrange the array elements in lexicographical order (alphabetically).
