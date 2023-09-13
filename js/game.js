let canvas;
let world;
let keyboard = new Keyboard();
let pause = false;
let gameStarted = false;
intervalIds = [];


/** Initialize level, characters and game graphics. */
function init() {
    initLevel();
    pauseAndContinue();
    gameStarted = true;
    backgroundSound();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    inactivityTime();
    inactivity();
    mobileDirectionBtnsStart();
    mobileDirectionBtnsEnd();
    hideGameOverScreens();
    let mobileMenu = document.getElementById('mainmenu');
    mobileMenu.style.display = "none";
}


/** Restart background sound at beginning of game. */
function backgroundSound() {
    bg_sound.pause();
    bg_sound.currentTime = 0;
    bg_sound.play();
    bg_sound.volume = 0.1;
}


/** Hides the Game Over screens at the beginning of game. */
function hideGameOverScreens() {
    let gameOverScreen = document.getElementById('gameoverscreen');
    gameOverScreen.style.display = "none";
    let winningScreen = document.getElementById('winningscreen');
    winningScreen.style.display = "none";
}


/** Set default values for pause function */
function pauseAndContinue() {
    let continueBtn = document.getElementById('continue');
    continueBtn.style.display = "none";
    pause = false;
}


/** Check inactify time of character and play "pause animation". */
function inactivityTime() {
    let time;
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;
    document.onkeydown = resetTimer;
    function idle() {
        if (!world.character.characterIsDead) {
            world.character.characterIdle = true;
        }
    }
    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(idle, 10);
        world.character.characterIdle = false;
    }
}


function inactivity() {
    window.onload = function () {
        inactivityTime();
    }
}


/** Create a stoppable interval. */
function setStoppAbleInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}


/** Show winning or losing screen on game over. */
function stopGame() {
    if (level1.endboss.isDead) {
        let winningScreen = document.getElementById('winningscreen');
        winningScreen.style.display = "flex";
    } else {
        let gameOverScreen = document.getElementById('gameoverscreen');
        gameOverScreen.style.display = "flex";
    }
    setTimeout(stopIntervals, 2000);
}


/** Stop all intervals. */
function stopIntervals() {
    for (let i = 1; i < 9999; i++) {
        window.clearInterval(i);
    }
}


/** Pause intervals. */
function pauseIntervals() {
    pause = true;
    bg_sound.pause();
    chicken_sound.pause();
    endboss_sound.pause();
}


/** Continue playing intervals. */
function startIntervals() {
    pause = false;
    bg_sound.play();
    chicken_sound.play();
    endboss_sound.play();
}


/** Check which key is pressed. */
document.addEventListener('keydown', (event) => {
    let keycode = event.keyCode;
    if (keycode == 37) {
        keyboard.LEFT = true;
    };
    if (keycode == 39) {
        keyboard.RIGHT = true;
    };
    if (keycode == 38) {
        keyboard.UP = true;
    };
    if (keycode == 40) {
        keyboard.DOWN = true;
    };
    if (keycode == 32) {
        keyboard.SPACE = true;
    };
    if (keycode == 68) {
        keyboard.D = true;
    };
});


/** Check which key was released. */
document.addEventListener('keyup', (event) => {
    let keycode = event.keyCode;

    if (keycode == 37) {
        keyboard.LEFT = false;
    };
    if (keycode == 39) {
        keyboard.RIGHT = false;
    };
    if (keycode == 38) {
        keyboard.UP = false;
    };
    if (keycode == 40) {
        keyboard.DOWN = false;
    };
    if (keycode == 32) {
        keyboard.SPACE = false;
    };
    if (keycode == 68) {
        keyboard.D = false;
    };

});


/**  Check which button is pressed on mobile device. */

function mobileDirectionBtnsStart() {
    document.getElementById("btnLeft").addEventListener("touchstart", (e) => {
        keyboard.LEFT = true;
        e.preventDefault();
    });
    document.getElementById("btnRight").addEventListener("touchstart", (e) => {
        keyboard.RIGHT = true;
        e.preventDefault();
    });
    document.getElementById("btnJump").addEventListener("touchstart", (e) => {
        keyboard.SPACE = true;
        e.preventDefault();
    });
    document.getElementById("btnThrow").addEventListener("touchstart", (e) => {
        keyboard.D = true;
        e.preventDefault();
    });
}


/**  Check which button is released on mobile device. */

function mobileDirectionBtnsEnd() {
    document.getElementById("btnLeft").addEventListener("touchend", (e) => {
        keyboard.LEFT = false;
        e.preventDefault();
    });
    document.getElementById("btnRight").addEventListener("touchend", (e) => {
        keyboard.RIGHT = false;
        e.preventDefault();
    });
    document.getElementById("btnJump").addEventListener("touchend", (e) => {
        keyboard.SPACE = false;
        e.preventDefault();
    });
    document.getElementById("btnThrow").addEventListener("touchend", (e) => {
        keyboard.D = false;
        e.preventDefault();
    });
}


function moveRight() {
    const button = document.getElementById("btnRight");
    button.addEventListener("mousedown", () => {
        keyboard.RIGHT = true;
    });
    button.addEventListener("mouseup", () => {
        keyboard.RIGHT = false;
    });
}


function moveLeft() {
    const button = document.getElementById("btnLeft");
    button.addEventListener("mousedown", () => {
        keyboard.LEFT = true;
    });
    button.addEventListener("mouseup", () => {
        keyboard.LEFT = false;
    });
}


function jump() {
    const button = document.getElementById("btnJump");
    button.addEventListener("mousedown", () => {
        keyboard.SPACE = true;
    });
    button.addEventListener("mouseup", () => {
        keyboard.SPACE = false;
    });
}


function throwbottle() {
    const button = document.getElementById("btnThrow");
    button.addEventListener("mousedown", () => {
        keyboard.D = true;
    });
    button.addEventListener("mouseup", () => {
        keyboard.D = false;
    });
}





