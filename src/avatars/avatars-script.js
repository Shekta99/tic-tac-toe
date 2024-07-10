const avatars = [];
let playerOneAvatar;
let playerTwoAvatar;

fetch("../../assets/avatars/list.json")
  .then((response) => response.json())
  .then((json) => {
    for (i = 0; i < json.avatars.length; i++) {
      avatars.push(`../../assets/avatars/${json.avatars[i].path}`);
    }
    const nextButtonPlayerOne = document.getElementById("player-one-next");
    const nextButtonPlayerTwo = document.getElementById("player-two-next");
    playerOneAvatar = document.getElementById("player-one-avatar");
    playerTwoAvatar = document.getElementById("player-two-avatar");
    const startButton = document.getElementById("start-button");
    startButton.onclick = () => {
      start();
    };

    loadAvatars(avatars);
    nextButtonPlayerOne.onclick = () => {
      nextAvatar("one");
    };

    nextButtonPlayerTwo.onclick = () => {
      nextAvatar("two");
    };

    const previousButtonPlayerOne = document.getElementById(
      "player-one-previous"
    );

    const previousButtonPlayerTwo = document.getElementById(
      "player-two-previous"
    );

    previousButtonPlayerOne.onclick = () => {
      previousAvatar("one");
    };

    previousButtonPlayerTwo.onclick = () => {
      previousAvatar("two");
    };
  });

function loadAvatars(avatars) {
  playerOneAvatar.setAttribute("src", avatars[0]);
  playerTwoAvatar.setAttribute("src", avatars[0]);
}

function getCurrentAvatar(player) {
  const playerAvatar = player == "one" ? playerOneAvatar : playerTwoAvatar;

  const currentAvatar = avatars.indexOf(
    avatars.filter((avatar) => avatar == playerAvatar.getAttribute("src"))[0]
  );

  return { playerAvatar, currentAvatar };
}

function nextAvatar(player) {
  const { playerAvatar, currentAvatar } = getCurrentAvatar(player);
  if (currentAvatar < avatars.length - 1) {
    playerAvatar.setAttribute("src", avatars[currentAvatar + 1]);
  } else {
    playerAvatar.setAttribute("src", avatars[0]);
  }
}

function previousAvatar(player) {
  const { playerAvatar, currentAvatar } = getCurrentAvatar(player);
  if (currentAvatar > 0) {
    playerAvatar.setAttribute("src", avatars[currentAvatar - 1]);
  } else {
    playerAvatar.setAttribute("src", avatars[avatars.length - 1]);
  }
}

function start() {
  const inputPlayerOne = document.getElementById("player-one-name");
  const namePlayerOne = inputPlayerOne.value;
  const avatarPlayerOne = playerOneAvatar.getAttribute("src");
  const playerOne = {
    name: namePlayerOne,
    avatar: avatarPlayerOne,
  };
  const inputPlayerTwo = document.getElementById("player-two-name");
  const namePlayerTwo = inputPlayerTwo.value;
  const avatarPlayerTwo = playerTwoAvatar.getAttribute("src");
  const playerTwo = {
    name: namePlayerTwo,
    avatar: avatarPlayerTwo,
  };

  if (!namePlayerOne) {
    const errorMessagePlayerOne = document.getElementById(
      "player-one-error-message"
    );
    errorMessagePlayerOne.setAttribute("style", "display:block");
    inputPlayerOne.addEventListener("keypress", () => {
      errorMessagePlayerOne.setAttribute("style", "display:none");
    });
  }
  if (!namePlayerTwo) {
    const errorMessagePlayerTwo = document.getElementById(
      "player-two-error-message"
    );
    errorMessagePlayerTwo.setAttribute("style", "display:block");
    inputPlayerTwo.addEventListener("keypress", () => {
      errorMessagePlayerTwo.setAttribute("style", "display:none");
    });
  }
  if (namePlayerOne && namePlayerTwo) {
    window.localStorage.setItem("playerOne", JSON.stringify(playerOne));
    window.localStorage.setItem("playerTwo", JSON.stringify(playerTwo));
    window.location.assign("http://127.0.0.1:5500/src/game/game.html");
  }
}
