// A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future"
// Our friend Pac has finally decided to pursue a career in the coding industry.
// He is a newbie, he needs to learn properly.
// Therefore, Pac wants to apply for the worldwide famous -and very demanding-
// 'C0d3r 1ns1d3' Academy for beginners.
// In order to join, Pac is required to solve a series of 3 exercises about 'Bug Fixes'.
// He has been sent an email from the Academy with the following instructions, This code is a mess! Would you help Pac to fix the code in time?
//
// (This might be helpful -> Math.Random();)
//
// This is my first Kata, so please any feedback (especially on Test Cases) is welcome!

//solution

function yourFutureCareer () {
        var career = Math.random()
        if (career <= 0.32) return 'FrontEnd Developer'
  else if (career <= 0.65) return 'BackEnd Developer'
  else return 'Full-Stack Developer'
                }
yourFutureCareer()
