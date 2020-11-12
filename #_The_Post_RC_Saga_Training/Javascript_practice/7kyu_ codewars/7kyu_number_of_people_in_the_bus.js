// 7kyu - Number of People in the Bus
// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

var number = function(busStops){
  let peopleSumPerStop = []
  for(let i=0; i<busStops.length; i++){
    peopleSumPerStop.push(busStops[i].reduce((accum, currentVal) => accum - currentVal))
  }
  return peopleSumPerStop.reduce((accum, currentVal) => accum + currentVal)
}

//prep

//parameters -----> an array with sub integers arrays. first index is number of people
//                  get into the bus, and second index is people of getting off the bus
//return ---------> an integer of the number of people still on the bus
//examples -------> param: [[10,0],[3,5],[5,8]], return: 5
//pseudo code ----> we can try the reduce method to see if we can add up all the values
//                  in order to get what is left, but the second index of the sub array is
//                  a subtraction of the total, therefore map can also be an option
//                  a for loop can also allow us to interate to each sub array
//                  and have an empty array declare to push into it and then finalize with reduce
