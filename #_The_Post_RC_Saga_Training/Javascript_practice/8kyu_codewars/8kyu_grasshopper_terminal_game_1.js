// 8 kyu - Grasshopper - Terminal Game #1
// https://www.codewars.com/kata/55e8aba23d399a59500000ce/train/javascript

function Hero (name) {
    this.name = name || 'Hero';
    this.position = '00';
    this.health = 100;
    this.damage = 5;
    this.experience = 0;
  }
  
  //PREP
  
  //P: argument name
  //R: function defines different attributes and their values
  //E: this.name = name || 'Hero'
  //P: within the function use the this keyword and then its attribute
  //   assigned to its respective value
  