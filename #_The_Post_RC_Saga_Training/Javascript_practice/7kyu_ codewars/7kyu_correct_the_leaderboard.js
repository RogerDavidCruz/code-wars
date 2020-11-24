// 7 kyu - Happy Coding : Correct The Leaderboard
// https://www.codewars.com/kata/599cdc22675e5f43f1000005/train/javascript

function correct(leaderBoard){
  let firstLeader = 'myjinxin2015';
  let leaders = leaderBoard.split('\n').map(x => x.slice(3));
  leaders[leaders.indexOf(firstLeader)] = leaders[0];
  leaders[0] = firstLeader;
  return leaders.map((leader, index) => `#${index+1} ${leader}`).join('\n');
}

//prep

//parameters -----> a string containing the leaderBoard order
//return ---------> a string with the correct order in the leaderboard
//examples -------> param: #1 g964              return: #1 myjinxin2015 
//                         #2 myjinxin2015              #2 g964
//                         #3 SteffenVogel_79           #3 SteffenVogel_79
//                         #4 smile67                   #4 smile67
//                         #5 Voile                     #5 Voile
//pseudo code ----> declare a variable for the first leader, then split and slice
//                  methods to remove the orthotrope and number for each index. 
//                  Next use the indexOf method to find where in the array the first
//                  leader is equal to, and use a single equal sign to apply the new value 
//                  to the variable but not evaluate equality, then use map with 
//                  template literal to join the array with the proper order
