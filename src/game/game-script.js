let playerOneSection;
let playerTwoSection;
const playerOneSymbol = "X";
const playerTwoSymbol = "O";
let playerOneNameData;
let playerTwoNameData;
let turn = 1;
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const selectedStyle =
  "box-shadow: rgba(187, 101, 44, 0.35) 0 -25px 18px -14px inset, rgba(187, 101, 44, 0.25) 0 4px 6px, rgba(187, 101, 44, 0.25) 0 4px 6px, rgba(187, 101, 44, 0.25) 0 8px 16px, rgba(187, 101, 44, 0.25) 0 16px 32px, rgba(187, 101, 44, 0.25) 0 32px 64px;";

function loadData() {
  const playerOneAvatar = document.getElementById("player-one-avatar");
  const playerTwoAvatar = document.getElementById("player-two-avatar");

  const playerOneName = document.getElementById("player-one-name");
  const playerTwoName = document.getElementById("player-two-name");

  const playerOneData = JSON.parse(window.localStorage.getItem("playerOne"));
  const playerTwoData = JSON.parse(window.localStorage.getItem("playerTwo"));

  playerOneAvatar.setAttribute("src", playerOneData.avatar);
  playerTwoAvatar.setAttribute("src", playerTwoData.avatar);

  playerOneNameData = playerOneData.name;
  playerTwoNameData = playerTwoData.name;

  playerOneName.innerText = "Nombre: " + playerOneData.name;
  playerTwoName.innerText = "Nombre: " + playerTwoData.name;

  playerOneSection = document.getElementById("player-one-section");
  playerTwoSection = document.getElementById("player-two-section");
  playerOneSection.setAttribute("style", selectedStyle);
}

function play(button, x, y) {
  if (turn == 1) {
    button.innerText = playerOneSymbol;
    board[x][y] = playerOneSymbol;
    turn = 2;
    playerOneSection.setAttribute("style", "");
    playerTwoSection.setAttribute("style", selectedStyle);
  } else {
    button.innerText = playerTwoSymbol;
    board[x][y] = playerTwoSymbol;
    turn = 1;
    playerTwoSection.setAttribute("style", "");
    playerOneSection.setAttribute("style", selectedStyle);
  }
  checkWinner();
}

function checkWinner() {
  let winner;
  //lineas horizontales player one
  if (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") {
    winner = "playerOne";
  }
  if (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") {
    winner = "playerOne";
  }
  if (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") {
    winner = "playerOne";
  }

  //Lineas horizontales player two
  if (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O") {
    winner = "playerTwo";
  }
  if (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O") {
    winner = "playerTwo";
  }
  if (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O") {
    winner = "playerTwo";
  }

  //lineas verticales player one
  if (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") {
    winner = "playerOne";
  }
  if (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") {
    winner = "playerOne";
  }
  if (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") {
    winner = "playerOne";
  }

  //Lineas verticales player two
  if (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O") {
    winner = "playerTwo";
  }
  if (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O") {
    winner = "playerTwo";
  }
  if (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O") {
    winner = "playerTwo";
  }

  //lineas diagonales player one
  if (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") {
    winner = "playerOne";
  }
  if (board[2][0] == "X" && board[1][1] == "X" && board[0][2] == "X") {
    winner = "playerOne";
  }

  //Lineas diagonales player Two
  if (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O") {
    winner = "playerTwo";
  }
  if (board[2][0] == "O" && board[1][1] == "O" && board[0][2] == "O") {
    winner = "playerTwo";
  }
  if (winner) {
    alert(
      "El ganador es: " +
        (winner == "playerOne" ? playerOneNameData : playerTwoNameData)
    );
    window.location.reload();
  }
}
