//window.alert('hi');

function startPlay() {

  for (let i = 1; i < 10; i++) {
    clearField(i);
  }

  document.player = "X";
  document.winner = null;

}

function setNote(note) {
  document.getElementById("alert").innerText = note;
}


function nextTurn(box) {
  if (document.winner != null) {
    setNote(document.player + "  has won the Game")
  } else if (box.innerText == '') {
  box.innerText = document.player;
  switchPlayer();
  } else {
    setNote("Try another space")
  }
}

function switchPlayer() {
  if (checkForWinner(document.player)) {
    setNote(document.player + " WON !!")
    document.winner = document.player;
  } else if (checkForDraw()) {
    setNote("It is a draw. Start Again.");
  } else if(document.player == "X") {
    document.player = "O";
    setNote("It is " + document.player + "'s turn.");
  } else {
    document.player = "X";
    setNote("It is " + document.player + "'s turn.");
  } 
}


function checkForWinner(win) {
  let result = false;
  if (checkCombination(1, 2, 3, win) ||
    checkCombination(4, 5, 6, win) ||
    checkCombination(7, 8, 9, win) ||
    checkCombination(1, 4, 7, win) ||
    checkCombination(2, 5, 8, win) ||
    checkCombination(3, 6, 9, win) ||
    checkCombination(1, 5, 9, win) ||
    checkCombination(3, 5, 7, win)) {
      result = true;
    }
    return result;
}

function checkForDraw () {
  for (let i = 1; i < 10; i++) {
    if (getField(i) == "")
      return false;
  }
  return true;
}


function checkCombination(a, b, c, win){
  let result = false;
  if (getField(a) == win && getField(b) == win && getField(c) == win) {
    result = true;
  }
  return result;
}

function getField(number) {
  return document.getElementById("b" + number).innerText;
}

function clearField(number) {
  document.getElementById("b" + number).innerText = "";
}
//
//let img = document.createElement("img");
//
//function useImage() {
//  if (document.player == "X") {
//    document.write(img);
//  } else {}
//}