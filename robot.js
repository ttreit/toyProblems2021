// On an infinite plane, a robot initially stands at (0, 0) and faces north. The robot can receive one of three instructions:

// "G": go straight 1 unit;
// "L": turn 90 degrees to the left;
// "R": turn 90 degrees to the right.
// The robot performs the instructions given in order, and repeats them forever.

// Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.


// Example 1:

// Input: instructions = "GGLLGG"
// Output: true
// Explanation: The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
// When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.
// Example 2:

// Input: instructions = "GG"
// Output: false
// Explanation: The robot moves north indefinitely.
// Example 3:

// Input: instructions = "GL"
// Output: true
// Explanation: The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...


// Constraints:

// 1 <= instructions.length <= 100
// instructions[i] is 'G', 'L' or, 'R'.

//Thoughts
  // **** if the first coordinates and last coordinates are 0,0 does that mean it's a circle? - there are no last coordinates - infinite loop but
  //   after running instructions only once if start === end then that is a circle. So we can make this check.

  // - If the G's and turns (L or R) are equal in length (number) does it make a circle?
  // - Can there be L's and R's in a valid pattern? GGLLGGRR (yes)
  // - The robot can only move the radius of the circle?  Cannot move more than the radius of the circle. Can it sometimes move less? GGGLGGL (All within circle of 3 radius)
  // GLGR - no will move outward infinitely
  // GLGRG - no
  // (Watched video) *** Second condition is that after going through the instructions once if I'm facing any direction other than the direction I started it will make a circle

//Input - directions G, L, R
//Output - true/false
//Edge Cases - Doesn't move, invlaid directions given

// L -1
// R +1
// G

// Start = 0 (north)
// West = -1 || 3
// South = -2 || 2
// East = -3 || 1
// X coordinate
// Y coordinate

const myRobot = function(instructions) {
  //check for valid directions (extra)

  // Iterate through directions if final value === 0,0 return true or if not facing north return true
  let x = 0;
  let y = 0;
  let facing = 0;
//Supporting Functions
  const move = function() {
    if (facing === 0) {
      y += 1;
    } else if (facing === -1 || facing === 3) {
      x -= 1;
    } else if (Math.abs(facing) === 2) {
      y -= 1;
    } else if (facing === -3 || facing === 1) {
      x += 1;
    } else {
      console.log('ERROR');
    }
  }

  const turn = function(direction) {
    if (direction === 'L') {
      facing -= 1;
    } else if (direction ==='R') {
      facing += 1;
    }
    if (Math.abs(facing) > 3) {
      facing = 0;
    }
  }

  //Main
  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i] == 'G') {
      move();
    } else if (instructions[i] == 'L') {
      turn('L');
    } else if (instructions[i] == 'R') {
      turn('R');
    } else {
      console.log('ERROR');
    }
  }

if (x === 0 && y === 0) {
  return true;
} else if (facing !== 0) {
  return true;
} else {
  return false
}

}

console.log(myRobot('GG'));
// "GLGLGGLGL"


