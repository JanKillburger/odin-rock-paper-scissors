const ROUNDS = 5;
const CHOICES = ["rock", "paper", "scissors"];

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < ROUNDS; i++) {
    const roundWinner = playRound(getComputerChoice(), getHumanChoice());
    if (roundWinner == "computer") {
      computerScore++;
    } else if (roundWinner == "human") {
      humanScore++;
    }
  }
  console.log(humanScore > computerScore ? "You win!" : humanScore == computerScore ? "It's a tie!" : "You lose!")
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomIndex];
}

function getHumanChoice() {
  const humanChoice = prompt(`Please enter one of: ${CHOICES.join(', ')}`).toLowerCase();
  if (CHOICES.includes(humanChoice)) {
    return humanChoice
  } else {
    console.error(new TypeError(`Valid choices are: ${CHOICES.join(', ')}. You entered: ${humanChoice}`))
  }
}

function playRound(computerChoice, humanChoice) {
  const roundWinner = getRoundWinner(computerChoice, humanChoice);
  if (roundWinner == "tie") {
    console.log(`It's a tie. You both selected: ${capitalize(computerChoice)}`);
  } else {
    if (roundWinner == "computer") {
      console.log(`Computer wins current round! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`)
    } else {
      console.log(`You win current round! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`)
    }
  }
  return roundWinner;
}

function getRoundWinner(computerChoice, humanChoice) {
  if (
    (computerChoice == "rock" && humanChoice == "scissors") ||
    (computerChoice == "paper" && humanChoice == "rock") ||
    (computerChoice == "scissors" && humanChoice == "paper")
  ) {
    return "computer";
  } else if (computerChoice == humanChoice) {
    return "tie";
  } else {
    return "human";
  }
}

function capitalize(string) {
  if (string.length == 1) {
    return string[0].toUpperCase();
  } else if (string.length >= 2) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }
}

playGame()