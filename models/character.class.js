/** Represents the main character "Pepe" of the game. */
class Character extends CollidableObject {

    offset = {
        top: 100,
        left: 20,
        right: 20,
        bottom: 10
    };

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];

    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ];

    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ];

    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ];

    IMAGES_IDLE = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png'
    ];

    world;
    speed = 6;
    characterIsDead = false;
    characterIdle = false;
    characterFalling = false;


    /**
    * Creates a new instance of the character.
    * @constructor
    * @param {string} loadImage - The path of the character image.
    * @param {Array} loadImages - A set of images paths for animation.
    */
    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.x = 50;
        this.y = 187;
        this.width = 122;
        this.height = 240;
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_IDLE);
        this.animate();
        this.applyGravity();
    }


    /** Play animations in different intervals: Walking, Idle, Jumping and Hitting. */
    animate() {
        this.characterIsDeadAnimation();
        setInterval(() => {
            if (!pause) {
                this.moveCharacter();}
        }, 1000 / 50);
        setInterval(() => {
            if (!pause) {
                this.playIdleImages();}
        }, 250);
        setInterval(() => {
            if (!pause) {
                this.playJumpingImages();}
        }, 180);
        setInterval(() => {
            if (!pause) {
            this.hurtAndWalkingAnimation();
            this.playJumpingSound();}
        }, 50);
    }


    /** Play animation when character is dead. */
    characterIsDeadAnimation() {
        let id;
        let intervals = 0;
        id = setInterval(() => {
            if (this.characterIsDead) {
                this.playAnimation(this.IMAGES_DEAD);
                intervals++;
                if (intervals == 7) {
                    clearInterval(id);
                    this.loadImage('img/2_character_pepe/5_dead/D-57.png');
                    setTimeout(stopGame(), 4000);
                }
            }
        }, 60);
    }

    /** Play animations when character is moving right or left. */
    moveCharacter() {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.moveRight();
        }
        if (this.world.keyboard.LEFT && this.x > 0) {
            this.x -= this.speed;
            this.otherDirection = true;
        }
        /** Move screen with direction of character. */
        this.world.camera_x = -this.x + 100;
    }


    /** Play jumping animation. */
    playJumpingImages() {
        if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_JUMPING);
        }
    }


    /** Play jumping sound. */
    playJumpingSound() {
        if (this.world.keyboard.SPACE && !this.isAboveGround() && this.characterIsDead == false) {
            this.jump();
            jumping_sound.play();
        }
    }


    /** Play idle animation. */
    playIdleImages() {
        if (this.characterIdle) {
            this.playAnimation(this.IMAGES_IDLE);
        }
    }


    /** Play animation when character got hit. */
    hurtAndWalkingAnimation() {
        if (this.isHurt() && this.characterIsDead == false) {
            this.playAnimation(this.IMAGES_HURT);
        }
        else {
            walking_sound.pause();
            if (this.world.keyboard.RIGHT && !this.isAboveGround() && this.characterIsDead == false ||
                this.world.keyboard.LEFT && !this.isAboveGround() && this.characterIsDead == false) {
                walking_sound.play();
                this.playAnimation(this.IMAGES_WALKING);
            }
        }
    }
}