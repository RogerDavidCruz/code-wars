function makePassword(phrase) {
    let password = [];
    phrase = phrase.split(' ');
    for (let i = 0; i < phrase.length; i++) {
      if (phrase[i][0] === 'i' || phrase[i][0] === 'I') {
        password.push(1);
        continue;
      }
      if (phrase[i][0] === 'o' || phrase[i][0] === 'O') {
        password.push(0);
        continue;
      }
      if (phrase[i][0] === 's' || phrase[i][0] === 'S') {
        password.push(5);
        continue;
      } 
      else password.push(phrase[i][0]) 
    }
    return password.join('');
}
