const computerChoiseDisplay = document.getElementById('computer-choise')
const yourChoiseDisplay = document.getElementById('your-choise')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let youChoise
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    youChoise = e.target.id
    yourChoiseDisplay.innerHTML = youChoise
    generateComputerChoise ()
    getResult ()
}))

function generateComputerChoise () {
  let randomNumber = Math.floor(Math.random () * 3) + 1

  if (randomNumber === 1) {
      computerChoice = 'rock'
    }

    if (randomNumber === 2) {
        computerChoice = 'scissors'

    }

    if (randomNumber === 3) {
        computerChoice = 'paper'
    }

    computerChoiseDisplay.innerHTML = computerChoice
} 

function getResult () {
    if (computerChoice === yourChoise)
    result = 'its a draw!'
   
} 
if (computerChoice === 'rock' && userChoise === "paper") {
 result = 'you win!'
} 

if (computerChoice === 'rock' && userChoise === "scissors") {
 result = 'you lost!'
} 

if (computerChoice === 'paper' && userChoise === "scissors") {
 result = 'you win!'
} 

if (computerChoice === 'paper' && userChoise === "rock") {
    result = 'you win!'
   } 

   if (computerChoice === 'scissors' && userChoise === "paper") {
    result = 'you lose!'
   } 

