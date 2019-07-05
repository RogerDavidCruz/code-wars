//CodeWar Challenge

// Ahoy matey!
//
// You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with a heavy booty on board.
//
// Unfortunattely for you, people weigh a lot this days, so how do you know if a ship if full of gold and not people?
//
// You begin with writing a generic Ship class:
//
// function Ship(draft,crew) {
//  this.draft = draft;
//  this.crew = crew;
// }
// Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:
//
// draft - an estimate of the ship's weight based on how low it is in the water
// crew - the count of crew on board
// var titanic = new Ship(15, 10);
// Taking into account that an average crew member on board adds 1.5 units to the draft, a ship that has a draft of more than 20 without crew is considered worthy to loot. Any ship weighing that much must have a lot of booty!
//
// Add the method
//
// isWorthIt
// to decide if the ship is worthy to loot. For example:
//
// titanic.isWorthIt() // return false
// This Kata teaches you the very basic of method creation.
//
// Good luck!


//Solution

class Ship{                   //declare a class
  constructor(draft,crew){    //declare a constructor within the class
  this.draft = draft;         //this.draft is like constructor.draft
  this.crew = draft;          //check 'this' notes below
  }
  isWorthIt(){
  return this.draft-1.5*this.crew>20; //weight units - 1.5 units, and must be > 20
  }
}

//the 'this' keyword is basically saying that whenever one of these object instances is created, the object's name property will be equal to the name value passed to the constructor call,and the method will use the name value passed to the constructor call too.
//MDN source^
