// 6 kyu - Weighted Grading System
// https://www.codewars.com/kata/58bc7ba5955a48179c000326/train/javascript

beforeAndAfterGrades = (categories, assessment) => {
  let finalArr = [];
  let newActualScore = 0;
  let newMaxScore = 0;
  let newScoreToAdd = 0;
  
  if(assessment.descr != 'CWHW' && assessment.descr != 'Proj' && assessment.descr != 'Part' && assessment.descr != 'TQ'){
    return 'Invalid input!';
  }
  if(categories.map(elem => elem.weight).reduce((accum, cv) => accum + cv) != 100){
    return 'Invalid input!';
  }
  
  let firstElem = categories.map((elem, idx) => idx === 0 ? (elem.actualScoreSoFar / elem.maxScoreSoFar) * elem.weight : idx === 1 ? (elem.actualScoreSoFar / elem.maxScoreSoFar) * elem.weight : idx === 2 ? (elem.actualScoreSoFar / elem.maxScoreSoFar) * elem.weight : idx === 3 ? (elem.actualScoreSoFar / elem.maxScoreSoFar) * elem.weight : '').reduce((accum, cv) => accum + cv)
  finalArr.push(firstElem)

  let descr = assessment.descr
  let newOption = categories.map(elem => elem.descr).filter(elem => elem === descr);

  if(newOption[0] === 'CWHW'){
    newActualScore = categories[0].actualScoreSoFar + assessment.actualScore;
    newMaxScore = categories[0].maxScoreSoFar + assessment.maxScore;
    newScoreToAdd = newActualScore/newMaxScore * categories[0].weight;
  }
  if(newOption[0] === 'Proj'){
    newActualScore = categories[1].actualScoreSoFar + assessment.actualScore;
    newMaxScore = categories[1].maxScoreSoFar + assessment.maxScore;
    newScoreToAdd = newActualScore/newMaxScore * categories[1].weight;
  }
  if(newOption[0] === 'Part'){
    newActualScore = categories[2].actualScoreSoFar + assessment.actualScore;
    newMaxScore = categories[2].maxScoreSoFar + assessment.maxScore;
    newScoreToAdd = newActualScore/newMaxScore * categories[2].weight;
  }
  if(newOption[0] === 'TQ'){
    newActualScore = categories[3].actualScoreSoFar + assessment.actualScore;
    newMaxScore = categories[3].maxScoreSoFar + assessment.maxScore;
    newScoreToAdd = newActualScore/newMaxScore * categories[3].weight;
  }
  
  let originalScores = categories.filter((elem, idx) => elem.descr != descr).map((elem, idx) => idx === 0 ? (elem.actualScoreSoFar / elem.maxScoreSoFar) * elem.weight : idx === 1 ? (elem.actualScoreSoFar / elem.maxScoreSoFar) * elem.weight : idx === 2 ? (elem.actualScoreSoFar / elem.maxScoreSoFar) * elem.weight : idx === 3 ? (elem.actualScoreSoFar / elem.maxScoreSoFar) * elem.weight : 0);
  originalScores.push(newScoreToAdd)
  let secondElem = Math.round(originalScores.reduce((accum, cv) => accum + cv))
  finalArr.push(secondElem)
  return finalArr 
}

//PREP

//P: first parameter is an array of objects, second param is an object
//R: an array [before score, after score] or an invalid input string
//E: [ { descr: 'CWHW',
//     weight: 35,
//     actualScoreSoFar: 90,
//     maxScoreSoFar: 100 },
//   { descr: 'Proj',
//     weight: 30,
//     actualScoreSoFar: 90,
//     maxScoreSoFar: 100 },
//   { descr: 'Part',
//     weight: 20,
//     actualScoreSoFar: 90,
//     maxScoreSoFar: 100 },
//   { descr: 'TQ',
//     weight: 15,
//     actualScoreSoFar: 90,
//     maxScoreSoFar: 100 } ] ,
//   { descr: 'TQ', actualScore: 100, maxScore: 100 } => '[90,91]'
//P: first declare a series a variables needed for the calculations, then do validation
//   for the parameters both their descr key value and weight value. Next find the first element
//   for the array being return while using the map and reduce method. Next create a new array
//   by filtering out the option that has a new assesment to be added. Then use conditional logic
//   to determine which value should be added to the prior score and then use for a new calculation.
//   Next filter through the array and remove the object that has the same descr and the assessment. 
//   Then map through the new filtered array and take all the average percentages and multiply them
//   by their weights. Next push the new score obtained in the conditional logic into the newly formed
//   array. Finally use the reduce method and push this second element to the final array that will
//   be returned.
