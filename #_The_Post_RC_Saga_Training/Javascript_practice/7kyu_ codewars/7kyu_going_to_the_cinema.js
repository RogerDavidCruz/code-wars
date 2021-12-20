// https://www.codewars.com/kata/562f91ff6a8b77dfe900006e/train/javascript

function movie(card, ticket, perc) {
    let priceA = 0;
    let priceB = card;
    let n = 0;
  
    while (Math.ceil(priceB) >= priceA) {
      priceA += ticket;
      n += 1
      priceB += ticket * Math.pow(perc, n)
    }
  return n;
};
