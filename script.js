function getComputerChoice() {
    const CHOICES = ["rock", "paper", "scissors"]
    let choice = Math.floor(Math.random() * 3)
    return CHOICES[choice]
}

function getUserChoice() {
    let choice = ""
    do {
        choice = prompt("Rock, Paper, Scissors: ").toLowerCase()
    } while (choice !== "rock" && choice !== "paper" && choice !== "scissors")

    return choice
}

function game(playerSelection, computerSelection) {
    let returnString = ""
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == computerSelection) {
        returnString = "Tie!"
    } else {
        if (playerSelection == "rock") {
            returnString =  computerSelection == "scissors" ? "You Win! Rock beats Scissors" : "You Lose! Paper beats Rock"
        } else if (playerSelection == "paper") {
            returnString = computerSelection == "rock" ? "You win! Paper beats Rock" : "You Lose! Scissors beats Paper"
        } else {
            returnString = computerSelection == "paper" ? "You win! Scissors beats Paper" : "You Lose! Rock beats scissors"
        }
    }

    return returnString
}

const main = () => {
    for (let i = 0; i < 5; i++) {
        console.log(game(getUserChoice(), getComputerChoice()))
    }
}

main()