/** Check current sound setting. */
function preInit() {
  checkSoundMuted();
}


/** Enter fullscreen mode. */
function fullscreen() {
  let fullscreen = document.getElementById('fullscreen');
  enterFullscreen(fullscreen);
  let fullScreenOff = document.getElementById('fullscreenoff');
  fullScreenOff.style.display = "block";
  let fullScreenOn = document.getElementById('fullscreenon');
  fullScreenOn.style.display = "none";
}


function enterFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {  // iOS Safari
    element.webkitRequestFullscreen();
  }
  /** Add new class to fullscreen mode. */
  let canvas = document.getElementById('canvas');
  canvas.classList.add('fullscreenmode');
  let fullscreenmain = document.getElementById('fullscreen');
  fullscreenmain.classList.add('fullscreenmain');
}


/** Exit fullscreen mode. */
function exitTheFullscreen() {
  if (document.fullscreenElement) {
  setTimeout(() => document.exitFullscreen(), 600);}
    setTimeout(() => removeFullscreen(), 600);
  
}


window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    setTimeout(() => removeFullscreen(), 600);
  }
});


function removeFullscreen() {
  let canvas = document.getElementById('canvas');
  canvas.classList.remove('fullscreenmode');
  let fullscreenmain = document.getElementById('fullscreen');
  fullscreenmain.classList.remove('fullscreenmain');
  let fullScreenOff = document.getElementById('fullscreenoff');
  fullScreenOff.style.display = "none";
  let fullScreenOn = document.getElementById('fullscreenon');
  fullScreenOn.style.display = "block";
}


/** Open and close the mobile dropdown menu. */
function openMobileMenu() {
  let mobileMenu = document.getElementById('mainmenu');
  let continueBtn = document.getElementById('continue');

  if (mobileMenu.style.display == "flex") {
    mobileMenu.style.display = "none";
    startIntervals();
    continueBtn.style.display = "none";
  }
  else {
    mobileMenu.style.display = "flex";
    pauseIntervals();
    if (gameStarted == true) {
      continueBtn.style.display = "block";
    }
  }
}


/** Continues the game after mobile menu is opened. */
function continueGame() {
  let mobileMenu = document.getElementById('mainmenu');
  let continueBtn = document.getElementById('continue');
  mobileMenu.style.display = "none";
  continueBtn.style.display = "none";
  startIntervals();
}

/** Show "How to - content". */
function showHowTo() {
  let howToContent = document.getElementById('howtoscreen');
  howToContent.style.display = 'flex';
  let mobileMenu = document.getElementById('mainmenu');
  mobileMenu.style.display = "none";
  pauseIntervals();
}


/** Close "How to - content". */
function closeHowTo() {
  let howToContent = document.getElementById('howtoscreen');
  howToContent.style.display = 'none';
  let mobileMenu = document.getElementById('mainmenu');
  mobileMenu.style.display = "flex";
  startIntervals();
}

