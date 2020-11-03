// 8 kyu - Transportation on vacation
// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript

function rentalCarCost(d) {
  if(d < 3){
    return d*40;
  }
  if(d >= 7){
    return (d*40)-50;
  }
  if(d >=3 && d<7){
    return (d*40)-20;
  }
}

//prep

// 40/day
// if day >= 7 decrease (40*day)-50
// if day >=3 and <7 decrease (40*day)-20
// also account for days less than 3
