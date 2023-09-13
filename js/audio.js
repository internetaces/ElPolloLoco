let bg_sound = new Audio('audio/bg_melody.mp3');
let walking_sound = new Audio('audio/walking.mp3');
let jumping_sound = new Audio('audio/jumping.mp3');
let coin_collected_sound = new Audio('audio/coincollected.mp3');
let bottle_collected_sound = new Audio('audio/bottlecollected.mp3');
let chicken_sound = new Audio('audio/chicken.mp3');
let endboss_sound = new Audio('audio/endboss.mp3');
let chicken_hurt_sound = new Audio('audio/enemy-hurt.mp3');
let character_hurt_sound = new Audio('audio/character-hurt.mp3');

let gameSounds = [
    bg_sound,
    walking_sound,
    jumping_sound,
    coin_collected_sound,
    bottle_collected_sound,
    chicken_sound,
    endboss_sound,
    chicken_hurt_sound,
    character_hurt_sound
];


if (chicken_sound !== undefined) {
    chicken_sound.pause();
  }


/** Turning all game sounds off. */
function allSoundsOff() {
    gameSounds.forEach(sound => {
        sound.muted = true;
    });
    saveMuteState(true);
    let soundsOffBtn = document.getElementById('allaudiooff');
    soundsOffBtn.style.display = "none";
    let soundsOnBtn = document.getElementById('allaudioon');
    soundsOnBtn.style.display = "block";
}


/** Turning all game sounds on. */
function allSoundsOn() {
    gameSounds.forEach(sound => {
        sound.muted = false;
    });
    saveMuteState(false);
    let soundsOffBtn = document.getElementById('allaudiooff');
    soundsOffBtn.style.display = "block";
    let soundsOnBtn = document.getElementById('allaudioon');
    soundsOnBtn.style.display = "none";
}


/** Check current state of sound (on or off). */
function checkSoundMuted() {
    let isMuted = getMuteState();
    if (isMuted) {
        allSoundsOff();
    } else {
        allSoundsOn();
    }
};


/** Save sound setting to local storage. */
function saveMuteState(muted) {
    localStorage.setItem('soundMuted', muted);
}


/** Load sound setting from local storage. */
function getMuteState() {
    let muted = localStorage.getItem('soundMuted');
    return muted === 'true';
}


