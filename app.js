

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
 let  feedback = document.querySelector('.feedback')
 if(gamerGuesses == correctNum) {
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
  let imgPath = '#'
  switch(totalGuesses) {
    case 1:
    case 2:
    case 3:
      console.log('you get a blue ribbon')
      imgPath = ''
      break;
    case 4:
    case 5:
    case 6:
      console.log(' case 4')
      imgPath = ''
      break;
 
  }
  riddons = document.querySelector('ribbons"')
 awardImg = document.createElement('img')
 awardImg.setAttribute('src', imgPath)
 riddons.appendChild(awardImg)
}