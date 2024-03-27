const choices = ["rock", "paper", "scissors"];

const imagePaths = {
    rock: "./images/rock.jpg",
    paper: "./images/hand.jpg",
    scissors: "./images/scisors.jpg"
};

let userScore = 0;
let computerScore = 0;

const resultMessage = document.getElementById("result-message");
const userScoreDisplay = document.querySelector(".user-score");
const computerScoreDisplay = document.querySelector(".computer-score");

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function updateScore(userChoice, computerChoice, winner) {
    const userChoiceImg = document.getElementById("user-choice");
    const computerChoiceImg = document.getElementById("computer-choice");
    const userScoreLabel = document.querySelector(".user-score");
    const computerScoreLabel = document.querySelector(".computer-score");

    userChoiceImg.src = imagePaths[userChoice];
    computerChoiceImg.src = imagePaths[computerChoice];
    resultMessage.textContent = winner;

    if (winner === "You win!") {
        userScore++;
        userScoreLabel.textContent = "Your score: " + userScore;
    } else if (winner === "Computer wins!") {
        computerScore++;
        computerScoreLabel.textContent = "Computer score: " + computerScore;
    }
}


function resetGame() {
    userScore = 0;
    computerScore = 0;
    userScoreDisplay.textContent = "Your score: " + userScore;
    computerScoreDisplay.textContent = "Computer score: " + computerScore;
    resultMessage.textContent = "";

    const userChoiceImg = document.getElementById("user-choice");
    const computerChoiceImg = document.getElementById("computer-choice");
    userChoiceImg.src = "images/hand.jpg";
    computerChoiceImg.src = "images/hand.jpg";
}


document.getElementById("rock").addEventListener("click", function () {
    const userChoice = "rock";
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);
    updateScore(userChoice, computerChoice, winner);
});

document.getElementById("paper").addEventListener("click", function () {
    const userChoice = "paper";
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);
    updateScore(userChoice, computerChoice, winner);
});

document.getElementById("scissors").addEventListener("click", function () {
    const userChoice = "scissors";
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);
    updateScore(userChoice, computerChoice, winner);
});

document.getElementById("reset").addEventListener("click", resetGame);
