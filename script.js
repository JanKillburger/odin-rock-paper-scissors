const WINNING_POINTS = 5;
const CHOICES = ["rock", "paper", "scissors"];
let humanScore, computerScore, round;

const humanScoreEl = document.querySelector('#human-score');
const computerScoreEl = document.querySelector('#computer-score');
const initBtn = document.querySelector('#init-btn');
initBtn.addEventListener("click", initGame)
const playBtns = document.querySelectorAll("button[data-choice]")
playBtns.forEach(
  btn => btn.addEventListener("click", (e) => 
    playRound(getComputerChoice(), e.target.getAttribute("data-choice"))));

const results = document.querySelector('#results');

initGame();

function initGame() {
  humanScore = 0;
  computerScore = 0;
  round = 0;
  results.textContent = '';
  playBtns.forEach(btn => btn.disabled = false)
  computerScoreEl.textContent = 0;
  humanScoreEl.textContent = 0;
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomIndex];
}

function playRound(computerChoice, humanChoice) {
  round++;
  const roundWinner = getRoundWinner(computerChoice, humanChoice);
  const result = document.createElement('p')
  if (roundWinner == "tie") {
    result.textContent = `It's a tie. You both selected: ${capitalize(computerChoice)}`;
  } else {
    if (roundWinner == "computer") {
      result.textContent = `Computer wins current round! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`;
    } else {
      result.textContent = `You win current round! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`;
    }
  }
  results.appendChild(result);
  processRoundResult(roundWinner);
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

function processRoundResult(roundWinner) {
  if (roundWinner == "computer") {
    computerScore++;
    computerScoreEl.textContent = computerScore;
  } else if (roundWinner == "human") {
    humanScore++;
    humanScoreEl.textContent = humanScore;
  }
  if (humanScore >= WINNING_POINTS || computerScore >= WINNING_POINTS) finishGame();
}

function finishGame() {
  const endResult = document.createElement('p');
  if (humanScore > computerScore) {
    endResult.textContent = "You win!";
    endResult.style.color = "green";
  } else if (humanScore == computerScore) {
    endResult.textContent = "It's a tie!";
  } else {
    endResult.textContent = "You lose!";
    endResult.style.color = "red";
  }
  endResult.style.fontWeight = "bold";
  results.appendChild(endResult);
  playBtns.forEach(btn => btn.disabled = true)
}

function capitalize(string) {
  if (string.length == 1) {
    return string[0].toUpperCase();
  } else if (string.length >= 2) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }
}
