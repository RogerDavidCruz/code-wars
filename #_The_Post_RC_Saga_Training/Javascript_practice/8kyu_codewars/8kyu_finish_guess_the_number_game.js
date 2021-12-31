class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
    }
    
    guess(n) {
      if(!this.lives) {
        throw new Error('You are out of lives.');
      }
      if(n === this.number) return true;
      
      this.lives -= 1;
      return false; 
    }
}

return n === this.number