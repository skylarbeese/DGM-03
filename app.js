

let correctNum = Math.floor(Math.random() * 15)

let guessed = false
let totalGuesses = 0
let gamerGuess = 0
correctNum += 1

console.log(`this is the number ${correctNum}`)

function elv() {
  
  totalGuesses += 1
  gamerGuess = document.querySelector('guess').value
  const feedBack = document.querySelector('feedback')
  console.log(totalGuesses, gamerGuess)
 if(gamerGuesses == correctNum) {
     console.log('the number is correct')
 } else {
    console.log('the number is not correct')
 } 
}