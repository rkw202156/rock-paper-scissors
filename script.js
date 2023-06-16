function getComputerChoice() {
    const CHOICES = ["rock", "paper", "scissors"]
    let choice = Math.floor(Math.random() * 3)
    return CHOICES[choice]
}

console.log(getComputerChoice())