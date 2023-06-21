let userPoints = 0; let compPoints = 0
const userScore = document.querySelector(".user-score")
const compScore = document.querySelector(".comp-score")

function getComputerChoice() {
    const CHOICES = ["rock", "paper", "scissors"]
    let choice = Math.floor(Math.random() * 3)
    return CHOICES[choice]
}

function getUserChoice(e) {
    return e.target.innerText.toLowerCase()
}


function game(playerSelection, computerSelection) {
   

    let returnString = ""
    const resultDiv = document.querySelector(".results")
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == computerSelection) {
        returnString = "Tie!"
    } else {
        if (playerSelection == "rock") {
            returnString =  computerSelection == "scissors" ? "You Win! Rock beats Scissors" : "You Lose! Paper beats Rock"
        } else if (playerSelection == "paper") {
            returnString = computerSelection == "rock" ? "You Win! Paper beats Rock" : "You Lose! Scissors beats Paper"
        } else {
            returnString = computerSelection == "paper" ? "You Win! Scissors beats Paper" : "You Lose! Rock beats scissors"
        }
    }

    resultDiv.innerText = returnString
    

    if (returnString !== "Tie!") {
        returnString.includes("Win") ? userPoints++ : compPoints++
    }

    

    if (userPoints === 5 || compPoints === 5) {
        if (userPoints === 5) {
            resultDiv.innerText = "Congratulations, you've received 5 points, and therefore have won!"
        } else {
            resultDiv.innerText = "Looks like the computer reached 5 points before you, you lose!"
        }
        userPoints = 0; compPoints = 0
    }

    userScore.innerText = "User Points: " + userPoints
    compScore.innerText = "Computer Points: " + compPoints

}


const options = document.querySelectorAll(".choice")
options.forEach(button => button.addEventListener("click",
                e => game(getUserChoice(e), getComputerChoice())))




