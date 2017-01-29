
var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;


function myKeyDown(event) {
    if (event.keyCode == 37) {
        leftPressed = true;
    }
    if (event.keyCode == 38) {
        upPressed = true;
    }
    if (event.keyCode == 40) {
        downPressed = true;
    }
    if (event.keyCode == 39) {
        rightPressed = true;
    }
}

function myKeyUp(event) {
    if (event.keyCode == 37) {
        leftPressed = false;
    }
    if (event.keyCode == 38) {
        upPressed = false;
    }
    if (event.keyCode == 40) {
        downPressed = false;
    }
    if (event.keyCode == 39) {
        rightPressed = false;
    }
}


function moveInterval() {
  if (leftPressed == true) {
    moveLeft();
  }
  if (rightPressed == true) {
    moveRight();
  }
  if (upPressed == true) {
    moveUp();
  }
  if (downPressed == true) {
    moveDown();
  }
}

function moveUp() {
  var element = document.getElementById('circle');
  var positionTop = element.offsetTop;
  element.style.top = positionTop - 1 + 'px';

}
function moveDown() {
  var element = document.getElementById('circle');
  var positionTop = element.offsetTop;
  element.style.top = positionTop + 1 + 'px';
}

function moveLeft() {
  var element = document.getElementById('circle');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft - 1 + 'px';
}

function moveRight() {
  var element = document.getElementById('circle');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft + 1 + 'px';
}


function myLoadEvent() {
  document.addEventListener('keydown', myKeyDown);
  document.addEventListener('keyup', myKeyUp);
  setInterval(moveInterval, 10);
}

document.addEventListener('DOMContentLoaded', myLoadEvent);


