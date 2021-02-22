

let correctNum = Math.floor(Math.random() * 15)

let guessed = false
let totalGuesses = 0
let gamerGuesses = 0
correctNum += 1

console.log(`this is the number ${correctNum}`)

function elv() {
  
  totalGuesses += 1
  gamerGuess = document.querySelector('.guess').value
 
  console.log(totalGuesses, gamerGuess, correctNum)
const  feedback = document.querySelector('.feedback')
 if(gamerGuess == correctNum) {
  feedback.innerText = 'the number is correct'
  giveAward()
 } else if(gamerGuess > correctNum && gamerGuess < 16) {
    feedback.innerText = 'the number is to high'
 }  else if(gamerGuess < correctNum && gamerGuess > 0) {
  feedback.innerText = 'the number is to low'
} else {
  feedback.innerText = 'choose a number betwwen 1 and 16 and try agien'
  totalGuesses -= 1
}

document.querySelector('#attempts').innerText = totalGuesses
}

function giveAward() {
  console.log('you win')
  let imgPath
  switch(totalGuesses) {
    case 1:
    case 2:
    case 3:
      console.log('you get a blue ribbon')
      imgPath = 'img/gold.jpg'
      break;
    case 4:
    case 5:
    case 6:
      console.log(' case 4')
      imgPath = 'img/blue.jpg'
      break;
 
  }
 const riddons = document.querySelector('.ribbons')
 const awardImg = document.createElement('img')
 awardImg.setAttribute('src', imgPath)
 riddons.appendChild(awardImg)
}