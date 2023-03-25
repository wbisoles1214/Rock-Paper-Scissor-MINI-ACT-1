function GetComputerPlay() {
  let skills = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * skills.length);
  return skills[random];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  switch (playerSelection + computerSelection) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      return "You win! " + playerSelection + " beats " + computerSelection;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      return "You lose! " + computerSelection + " beats " + playerSelection;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      return "It's a tie!";
    default:
      return "Invalid input!";
  }
}

function game() {
  for (let i = 0; i < 3; i++) {
    let playerSelection = prompt("Enter rock, paper, or scissors:");
    let computerSelection = GetComputerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
