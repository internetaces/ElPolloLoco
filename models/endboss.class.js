/** Represents the level endboss. */
class Endboss extends CollidableObject {
    width = 348;
    height = 405;
    y = 50;

    offset = {
        top: 40,
        left: 20,
        right: 10,
        bottom: 10
    };

    energy;
    justHitted = false;
    isDead = false;

    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png',
    ];

    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];


    /**
    * Creates a new instance of endboss.
    * @constructor
    * @param {string} loadImage - The path of the endboss image.
    * @param {Array} loadImages - A set of images paths for animation.
    */
    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/2_alert/G5.png');
        this.x = 4100;
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
        this.speed = 0.15;
        this.energy = 3;
    }


    /** Play different animations / load the set of images by different conditions. */
    animate() {
        let hadFirstContact = false;
        let i = 0;
        let j = 0;
        setInterval(() => {
            if (pause) return;
            if (i < 8) {
                this.playAnimation(this.IMAGES_ALERT);
            } else if (this.playWalkingCondition(hadFirstContact)) {
                this.playAnimation(this.IMAGES_WALKING);
            }
            else if (level1.endboss.justHitted && !level1.endboss.isDead) {
                this.playAnimation(this.IMAGES_HURT);
                chicken_hurt_sound.play();
            }
            else if (level1.endboss.isDead) {
                if (j < 3) {
                    this.playAnimation(this.IMAGES_HURT);
                    j++;
                } else { this.playAnimation(this.IMAGES_DEAD); }
            }
            i++;
            if (world.character.x > 3740 && !hadFirstContact) {
                i = 0;
                this.startAttack();
                this.playEndbossSound();
                world.statusBarEndboss.y = 0;
                hadFirstContact = true;
            }
        }, 150);
    }


    /** Plays sound when endboss is in near.*/
    playEndbossSound() {
        endboss_sound.play();
    }


    /** Condition when to play walking animation. */
    playWalkingCondition(hadFirstContact) {
        return hadFirstContact && this.x >= world.character.x + 20 && level1.endboss.justHitted == false && level1.endboss.isDead == false ||
            hadFirstContact && this.x < world.character.x - 200 && level1.endboss.justHitted == false && level1.endboss.isDead == false;
    }


    /** Play alert and walking animation when character is near. */
    startAttack() {
        setInterval(() => {
            if (pause) return;
            if (!(level1.endboss.justHitted == false && !level1.endboss.isDead)) return;
            if (this.x >= world.character.x + 20) {
                this.x -= 3;
                this.otherDirection = false;
            } else
                if (this.x < world.character.x - 200) {
                    this.x += 3;
                    this.otherDirection = true;
                }
        }, 70);
    }
}