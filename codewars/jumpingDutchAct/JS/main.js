// Coding 3min : Jumping Dutch act
//
// This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

// Task:
// Mr. despair wants to jump off Dutch act, So he came to the top of a building.
//
// Scientific research shows that a man jumped from the top of the roof, when the floor more than 6, the person will often die in an instant; When the floor is less than or equal to 6, the person will not immediately die, he would scream. (without proof)
//
// Input: floor, The height of the building (floor)
//
// Output: a string, The voice of despair(When jumping Dutch act)

//Solution

function sc(floor){
if (floor <=1) return ''
if (floor > 6) return `${'Aa~ '.repeat(floor-1)}Pa!`
if (floor <=6) return `${'Aa~ '.repeat(floor-1)}Pa! Aa!`
}
