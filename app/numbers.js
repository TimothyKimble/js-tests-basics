// Write a function that uses the addition operator to add two numbers together
function add(x, y) {
  z = x + y
  return z
}

// Write a function that returns the Cubed value of x
function cubed(x) {
  z = Math.pow(x, 3)
  return z
}

// Write a function that will divide two numbers, and will format the returned value
// as a whole number. (No Decimals)
function divideWholey(x, y) {
  z = Math.floor(x / y)

  return z
}

// Write a function that takes in a number and determines if it is even. 
// It should return a boolean value - true if it is even, false if it is odd.
function isEven(num) {
  if (num % 2 == 0) {
    return true
  } else {
    return false
  }
}


// Given 2 numbers, generate a random number within that range. 
// Make it inclusive so that the starting and ending numbers are part 
// of the range.HINT ** Utilize Javascript's Math Class (To the Google!)
function numberGenerator(num1, num2) {
  min = Math.ceil(num1);
  max = Math.floor(num2);
  return Math.floor(Math.random() * (num2 - num1 + 1) + num1);
}