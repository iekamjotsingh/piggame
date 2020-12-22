var scores, roundScore, activePlayer, gamePlaying;

init();

// roll dice

document.querySelector(".btn--roll").addEventListener("click", function () {
  if (gamePlaying) {
    // random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // display number
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    // update the final score if rolled number is not one
    if (dice !== 1) {
      roundScore += dice;
      document.querySelector(
        "#current--" + activePlayer
      ).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
});

// Hold Button

document.querySelector(".btn--hold").addEventListener("click", function () {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;

    document.querySelector("#score--" + activePlayer).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document.querySelector("#name--" + activePlayer).textContent = "Winner";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player--" + activePlayer)
        .classList.add("player--winner");
      document
        .querySelector(".player--" + activePlayer)
        .classList.remove("player--active");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

// New Game

document.querySelector(".btn--new").addEventListener("click", init);

// function init

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;

  document.querySelector(".dice").style.display = "none";

  document.getElementById("score--0").textContent = 0;
  document.getElementById("score--1").textContent = 0;
  document.getElementById("current--0").textContent = 0;
  document.getElementById("current--1").textContent = 0;
  document.getElementById("name--0").textContent = "Player 1";
  document.getElementById("name--1").textContent = "Player 2";
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");
  document.querySelector(".player--0").classList.remove("player--active");
  document.querySelector(".player--0").classList.add("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
  gamePlaying = true;
}

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById("current--0").textContent = "0";
  document.getElementById("current--1").textContent = "0";

  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");

  document.querySelector(".dice").style.display = "none";
}
