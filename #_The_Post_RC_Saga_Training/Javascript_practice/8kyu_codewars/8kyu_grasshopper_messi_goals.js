// 8 kyu - Grasshopper - Messi Goals
// https://www.codewars.com/kata/55ca77fa094a2af31f00002a/train/javascript
//
// Messi's Goal Total
// Use variables to find the sum of the goals Messi scored in 3 competitions
//
// Information
// Messi goal scoring statistics:
//
// Competition	Goals
// La Liga	43
// Champions League	10
// Copa del Rey	5
// Define
// Create three variables and store the appropriate values using the table above:
//
// laLigaGoals
// championsLeagueGoals
// copaDelReyGoals
// Create a fourth variable named totalGoals (javascript, C#, Java) or total_goals (python, ruby). totalGoals/total_goals should store the sum of all of Messi's goals for this year.

// Solution # 1

var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = (laLigaGoals + championsLeagueGoals + copaDelReyGoals)

//Solution #2

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//prep

//p: 3 numbers
//r: 1 number
//e: p: 43, 10, 5, r: 58
//p: add each parameter using the + operator. 
