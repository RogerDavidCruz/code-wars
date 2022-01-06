// https://www.codewars.com/kata/57ee31c5e77282c24d000024/train/javascript

function paul(x){
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
      if (x[i] === "kata") {
        sum += 5;
      }
      if (x[i] === "Petes kata") {
        sum += 10;
      }
      if (x[i] === "life") {
        sum += 0;
      }
      if (x[i] === "eating") {
        sum += 1;
      }
    }
  
    if (sum < 40) {
      return "Super happy!";
    }
    if (sum < 70 && sum >= 40) {
      return "Happy!";
    }
    if (sum < 100 && sum >= 70) {
      return "Sad!";
    }
    if (sum > 100) {
      return "Miserable!";
    }
}
