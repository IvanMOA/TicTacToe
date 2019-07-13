var tictactoe = document.getElementsByClassName("tictactoe")[0];
var playAgain = document.getElementsByClassName("playagain")[0];
var switcher = true;
var pOneCounter = 0;
var pTwoCounter = 0;
var map = new Array(8);
// Getting counter to chagne its color later
var spanOne = document.getElementsByClassName("counterOne")[0];
var spanTwo = document.getElementsByClassName("counterTwo")[0];
for (var i = 0; i < 9; i++) {
  map[i] = i;
}
// Resets everything so you can play again
function reset() {
  // Reset classes and innerHTML

  for (let i = 1; i < 10; i++) {
    map[i - 1] = i;
    let currentC = document.getElementsByClassName("n" + i)[0];
    currentC.style.backgroundColor = "#555555";
    currentC.className = "cube n" + i;
    currentC.innerHTML = "";
    currentC.id = "";
  }
  var modal = document.getElementsByClassName("win")[0];
  modal.style.display = "none";
}
// Display a win msg and a button to restart the game
function gameEnded(whoWon) {
  var modal = document.getElementsByClassName("win")[0];
  modal.style.display = "flex";
  var winner;
  if (whoWon == "cross") {
    winner = "Player 1";
    pOneCounter++;
    document.getElementsByClassName("counterOne")[0].innerHTML = pOneCounter;
  } else if (whoWon == "circle") {
    winner = "Player 2";
    pTwoCounter++;
    document.getElementsByClassName("counterTwo")[0].innerHTML = pTwoCounter;
  }
  var winMsg = document.getElementsByClassName("winmsg")[0];
  winMsg.innerHTML = winner + " won !";
}
// Puts a figure depending on who has the turn
function putFigure(e) {
  if (
    e.target.className.split(" ")[0] == "far" ||
    e.target.className.split(" ")[0] == "fas"
  ) {
    var currentCubeClass = e.target.parentElement.className.split(" ")[1];
    var currentCube = document.querySelector("." + currentCubeClass);
    var currentCubeNumber = currentCubeClass.charAt(1);
  } else {
    var currentCubeClass = e.target.className.split(" ")[1];
    var currentCube = document.querySelector("." + currentCubeClass);
    var currentCubeNumber = currentCubeClass.charAt(1);
  }

  // P1
  var playerOne = document.querySelector(".playerOne");
  var playerOneName = playerOne.children[1];
  // P2
  var playerTwo = document.querySelector(".playerTwo");
  var playerTwoName = playerTwo.children[1];
  // Main function
  if (switcher == true && currentCube.id != "clicked") {
    // Putting a cross
    if (currentCube.className.split(" ")[0] == "cube") {
      currentCube.innerHTML = "<i class='fas fa-times'></i>";
      currentCube.id = "clicked";
      switcher = false;
      currentCube.className += " cross";
      map[currentCubeNumber - 1] = "cross";
      // Switching colors
      playerOneName.style.color = "gray";
      spanOne.id = "gray";
      playerTwoName.style.color = "#f5f5f5";
      spanTwo.id = "white";
    }
  } else if (switcher == false && currentCube.id != "clicked") {
    // Putting  a circle
    if (currentCube.className.split(" ")[0] == "cube") {
      currentCube.innerHTML = "<i class='far fa-circle'></i>";
      currentCube.id = "clicked";
      switcher = true;
      currentCube.className += " circle";
      map[currentCubeNumber - 1] = "circle";
      // Switching colors
      playerOneName.style.color = "#f5f5f5";
      spanOne.id = "white";
      playerTwoName.style.color = "gray";
      spanTwo.id = "gray";
    }
  }
  // Check if someone has won
  if (map[0] == map[1] && map[1] == map[2]) {
    let indexes = new Array(0, 1, 2);
    for (let i = 0; i < 3; i++) {
      document.getElementsByClassName(
        "n" + (indexes[i] + 1)
      )[0].style.backgroundColor = "#f5f5f5";
    }
    gameEnded(map[0]);
  } else if (map[3] == map[4] && map[4] == map[5]) {
    let indexes = new Array(3, 4, 5);
    for (let i = 0; i < 3; i++) {
      document.getElementsByClassName(
        "n" + (indexes[i] + 1)
      )[0].style.backgroundColor = "#f5f5f5";
    }
    gameEnded(map[3]);
  } else if (map[6] == map[7] && map[7] == map[8]) {
    let indexes = new Array(6, 7, 8);
    for (let i = 0; i < 3; i++) {
      document.getElementsByClassName(
        "n" + (indexes[i] + 1)
      )[0].style.backgroundColor = "#f5f5f5";
    }
    gameEnded(map[6]);
  } else if (map[0] == map[3] && map[3] == map[6]) {
    let indexes = new Array(0, 3, 6);
    for (let i = 0; i < 3; i++) {
      document.getElementsByClassName(
        "n" + (indexes[i] + 1)
      )[0].style.backgroundColor = "#f5f5f5";
    }
    gameEnded(map[0]);
  } else if (map[1] == map[4] && map[4] == map[7]) {
    let indexes = new Array(1, 4, 7);
    for (let i = 0; i < 3; i++) {
      document.getElementsByClassName(
        "n" + (indexes[i] + 1)
      )[0].style.backgroundColor = "#f5f5f5";
    }
    gameEnded(map[1]);
  } else if (map[2] == map[5] && map[5] == map[8]) {
    let indexes = new Array(2, 5, 8);
    for (let i = 0; i < 3; i++) {
      document.getElementsByClassName(
        "n" + (indexes[i] + 1)
      )[0].style.backgroundColor = "#f5f5f5";
    }
    gameEnded(map[2]);
  } else if (map[0] == map[4] && map[4] == map[8]) {
    let indexes = new Array(0, 4, 8);
    for (let i = 0; i < 3; i++) {
      document.getElementsByClassName(
        "n" + (indexes[i] + 1)
      )[0].style.backgroundColor = "#f5f5f5";
    }
    gameEnded(map[0]);
  } else if (map[2] == map[4] && map[4] == map[6]) {
    let indexes = new Array(2, 4, 6);
    for (let i = 0; i < 3; i++) {
      document.getElementsByClassName(
        "n" + (indexes[i] + 1)
      )[0].style.backgroundColor = "#f5f5f5";
    }
    gameEnded(map[2]);
  }
}

// Calling area
tictactoe.addEventListener("click", putFigure);
playAgain.addEventListener("click", reset);

// Functions to use on the following section
function showOnMO(i) {
  var cC = document.getElementsByClassName("n" + (i + 1))[0];
  if (cC.style.backgroundColor != "rgb(245, 245, 245)" && cC.id != "clicked") {
    cC.style.backgroundColor = "#999999";
    if (spanOne.id == "white") {
      cC.innerHTML = "<i class='fas fa-times'></i>";
    } else {
      cC.innerHTML = "<i class='far fa-circle'></i>";
    }
    cC.children[0].addEventListener("click", putFigure);
  }
}
function hideOnMO(i) {
  var cC = document.getElementsByClassName("n" + (i + 1))[0];
  if (cC.style.backgroundColor != "rgb(245, 245, 245)" && cC.id != "clicked") {
    cC.style.backgroundColor = "#555555";
    if (spanOne.id == "white") {
      cC.innerHTML = "";
    } else {
      cC.innerHTML = "";
    }
  }
}
// Change things while hovering
var singleCube = document.getElementsByClassName("cube");
for (let i = 0; i < 9; i++) {
  singleCube[i].addEventListener("mouseenter", function() {
    showOnMO(i);
  });
  singleCube[i].addEventListener("mouseleave", function() {
    hideOnMO(i);
  });
}

//Cross: <i class='fas fa-times'></i>" Circle: "<i class='far fa-circle'></i>"
