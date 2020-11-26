// 8 kyu - Rock Paper Scissors!
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

const rps = (p1, p2) => {
  if(p1 === 'rock' && p2 === 'rock' || p1 === 'scissors' && p2 === 'scissors' || p1 === 'paper' && p2 === 'paper'){
    return 'Draw!'
  }
  if(p1==='rock' && p2==='scissors' || p1==='scissors' && p2==='paper' || p1==='paper' && p2==='rock'){
    return 'Player 1 won!'
  }else{
    return 'Player 2 won!'
  }
}

//prep

//parameters -----> two strings that can be 'rock', 'scissors', or 'paper'
//return ---------> a string stating a draw or that either player 1 or 2 won
//examples -------> param: 'rock', 'scissors' return: 'Player 1 won!'
//pseudo code ----> use if conditional statements and logic operators to determine
//                  when both parameters are the same it's a draw, and then param
//                  combinations when one player wins, else all other param 
//                  combinations should result in the other player winning
