// 8 kyu -Total amount of points
// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
//
// For example: ["3:1", "2:2", "0:1", ...]
//
// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
//
// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point

const points = games =>
  games.reduce((totalPoints, matchScore) => {
    const [x, y] = matchScore.split(':').map(Number)
    if (x > y) return totalPoints + 3
    if (x < y) return totalPoints
    if (x === y) return totalPoints + 1
  }, 0)
