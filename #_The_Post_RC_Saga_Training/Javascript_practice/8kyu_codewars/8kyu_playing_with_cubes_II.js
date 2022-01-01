// This Cube function needs help
// change the constructor so that it can take an integer for the side or no args
class Cube {
    constructor(n) {
      this.side = 0;
      this.setSide(n);
    }
    
    getSide() {
      return this.side;
    }
    
    setSide(n) {
      if (isNaN(n) === true) return;
      this.side = Math.abs(n);
    }
};

//Second Solution

class Cube {
  constructor(side) {
    this.setSide(side);
  }
  
  getSide() {
    return this.side;
  }
  
  setSide(side = 0) {
    this.side = Math.abs(side);
  }
};
